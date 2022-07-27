import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WorkerModule } from 'angular-web-worker/angular'

import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConfigComponent } from './config/config.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardCardComponent } from './dashboard.card/dashboard.card.component';
import { DashboardCardDetailComponent } from './dashboard.card.detail/dashboard.card.detail.component';
import { FeedComponent } from './feed/feed.component';
import { FeedService } from './feed/feed.service';
import { ConfigService } from "./config/config.service";

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    DashboardComponent,
    DashboardCardComponent,
    DashboardCardDetailComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ ConfigService, FeedService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
