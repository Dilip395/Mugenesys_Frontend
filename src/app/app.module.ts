import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {ConfigService} from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBQw0qwsy7G_4A9VnaqUUfD0_Z1whYAIgE',
      libraries: ['places']
    })
  ],
  providers: [
    ConfigService],
  bootstrap: [AppComponent]
})

export class AppModule { }
