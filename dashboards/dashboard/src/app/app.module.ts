import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WorkerModule } from 'angular-web-worker/angular'

import { AppComponent } from './app.component';
import { ExampleWorker } from './updateFeed.worker';

import { HttpClientModule } from '@angular/common/http';
import { ConfigComponent } from './config/config.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard } from './dashboard.card/dashboard.card.component';
import { Dashboard } from './dashboard.card.detail/dashboard.card.detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    DashboardComponent,
    Dashboard.CardComponent,
    Dashboard.Card.DetailComponent
  ],
  imports: [
    BrowserModule,
    WorkerModule.forWorkers([
      {worker: ExampleWorker, initFn: () => new Worker(new URL('./updateFeed.worker.ts', import.meta.url), {type: 'module'})},
      // {worker: ExampleWorker, initFn: () => new Worker('./example.worker.ts', {type: 'module'})},
    ]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
