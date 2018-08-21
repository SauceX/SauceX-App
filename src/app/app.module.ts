import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { DeviceComponent } from './device/device.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ConfigComponent } from './config/config.component';
import { SettingsComponent } from './settings/settings.component';
import { BottleComponent } from './bottle/bottle.component';
import { ChartComponent } from './chart/chart.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    AppComponent,
    TabbarComponent,
    HomeComponent,
    DeviceComponent,
    StatisticsComponent,
    ConfigComponent,
    SettingsComponent,
    BottleComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    OnsenModule,
    AppRoutingModule,
    NgxEchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DeviceComponent],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
