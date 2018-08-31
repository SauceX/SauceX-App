import { Component, OnInit } from '@angular/core';
import {ConfigDetail} from './configDetail';
import * as ons from 'onsenui';

@Component({
  selector: 'app-config-detail',
  templateUrl: './config-detail.component.html',
  styleUrls: ['./config-detail.component.css']
})
export class ConfigDetailComponent implements OnInit {
  value: ConfigDetail = new ConfigDetail();
  constructor() {
  }

  ngOnInit() {
  }
  save() {
    ons.notification.toast('保存成功!', {timeout: 2000});
  }
}
