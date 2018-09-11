import { Component, OnInit } from '@angular/core';
import {ConfigDetail} from '../config-detail/configDetail';
import {MockService} from '../mock.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  now = new Date();
  iotConfigs: Array<ConfigDetail>;
  cloudConfigs: Array<ConfigDetail>;
  constructor(private mockService: MockService) {
    this.iotConfigs = this.mockService.getIotConfigs();
    this.cloudConfigs = this.mockService.getCloudConfigs();
  }

  ngOnInit() {
  }

}
