import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DeviceComponent} from './device/device.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {ConfigComponent} from './config/config.component';
import {SettingsComponent} from './settings/settings.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'device', component: DeviceComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'config', component: ConfigComponent},
  {path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
