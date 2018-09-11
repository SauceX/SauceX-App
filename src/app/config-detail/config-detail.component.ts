import { Component, OnInit } from '@angular/core';
import {ConfigDetail} from './configDetail';
import * as ons from 'onsenui';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-config-detail',
  templateUrl: './config-detail.component.html',
  styleUrls: ['./config-detail.component.css']
})
export class ConfigDetailComponent implements OnInit {
  value: ConfigDetail = new ConfigDetail();
  constructor(public route: ActivatedRoute) {
    this.route.queryParams.subscribe(queryParams => {
      this.value = queryParams.data;
    });
  }

  ngOnInit() {

  }
  save() {
    ons.notification.toast('保存成功!', {timeout: 2000});
  }
}
