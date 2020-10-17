//app.component.ts

import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import {ConfigService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;
  outletInformation: string = '';

  @ViewChild('search')
  public searchElementRef: ElementRef;


  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private configService:ConfigService
  ) { }


  ngOnInit() {
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
          this.getOultLetByLatLong(this.latitude, this.longitude);
        });
      });
    });
  }


  getOultLetByLatLong(latitude, longitude) {
    this.configService.getOultLetByLatLong(latitude, longitude).then(response=>{
      this.outletInformation=response.message;
    })

  }

}