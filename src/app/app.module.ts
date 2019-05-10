import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayComponent } from './play/play.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { SuccessComponent } from './success/success.component';
import { AppRoutingModule } from './app-routing.module/app-routing.module'


@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    SuccessComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
