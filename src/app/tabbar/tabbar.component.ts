import {Component, OnInit} from '@angular/core';
import {onsPlatform} from 'ngx-onsenui';
import {DeviceComponent} from '../device/device.component';


@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.css']
})
export class TabbarComponent implements OnInit {
  device = DeviceComponent;
  tabs: Array<any>;
  material: boolean;

  constructor() {
    this.tabs = [
      {path: 'home', label: 'Home', icon: 'fa-home',},
      {path: 'config', label: 'config', icon: 'fa-sliders',},
      {path: 'statistics', label: 'statistics', icon: 'fa-bar-chart',},
      {path: 'settings', label: 'settings', icon: 'fa-user-circle-o',},
    ];
    this.material = onsPlatform.isAndroid();
  }

  updateStyle(platform: string) {
    this.material = platform === 'ios';
  }

  ngOnInit() {
  }

}
