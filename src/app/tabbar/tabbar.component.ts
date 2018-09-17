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
      {path: 'cookbook', label: '菜谱',},
      {path: 'home', label: '状态',},
      {path: 'config', label: 'config', icon: 'fa-plus',},
      {path: 'market', label: '商城',},
      {path: 'settings', label: '我的',},
    ];
    this.material = onsPlatform.isAndroid();
  }

  updateStyle(platform: string) {
    this.material = platform === 'ios';
  }

  ngOnInit() {
  }

}
