import { Component, OnInit } from '@angular/core';
import {ConfigDetail} from '../config-detail/configDetail';
import {MockService} from '../mock.service';
import * as ons from 'onsenui';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  now = new Date();
  iotConfigs: Array<ConfigDetail>;
  cloudConfigs: Array<ConfigDetail>;
  constructor() {
    this.iotConfigs = MockService.getIotConfigs();
    this.cloudConfigs = MockService.getCloudConfigs();
  }

  ngOnInit() {
  }
  showActionSheet(id: number, event: Event) {
    event.stopPropagation();
    ons.openActionSheet({
      title: 'Dynamic action sheet',
      cancelable: true,
      buttons: [
        'Label 0',
        'Label 0',
        'Label 1',
        'Label 1',
        'Label 1',
        {
          label: 'Label 2',
          modifier: 'destructive'
        },
        {
          label: '取消',
          icon: 'md-close'
        }
      ],
      animation: 'default',
      callback:
    });
  }
}
