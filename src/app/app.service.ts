import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'dns';
import { rejects } from 'assert';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  getOultLetByLatLong(lat:string, long:string):any{
      return new Promise((resolve, rejects)=>{
            this.http.get(`http://192.168.0.101:8080/api?lat=${lat}&long=${long}`).subscribe(resp=>{
                resolve(resp);
            })
      })
      
  }
}