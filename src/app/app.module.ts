import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroiinesComponent } from './heroiines/heroiines.component';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroinDetailComponent } from './heroin-detail/heroin-detail.component';

import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  
  
  ],
      declarations: [
    AppComponent,

    HeroesComponent,
    HoroiinesComponent,

    HeroDetailComponent,
    HeroinDetailComponent,

    MessagesComponent,
    DashboardComponent,

  ],

  
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }