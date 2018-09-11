import {Component, OnInit} from '@angular/core';
import {ConfigDetail} from './configDetail';
import * as ons from 'onsenui';
import {ActivatedRoute} from '@angular/router';
import {MockService} from '../mock.service';

@Component({
  selector: 'app-config-detail',
  templateUrl: './config-detail.component.html',
  styleUrls: ['./config-detail.component.css']
})
export class ConfigDetailComponent implements OnInit {
  value: any;
  bottleSet = ConfigDetail.BottleSet;
  cloudConfigs = MockService.getCloudConfigs();
  constructor(public route: ActivatedRoute) {
    this.route.queryParams.subscribe(queryParams => {
      const id = queryParams.id;
      if (id) {
        this.value = this.cloudConfigs[id];
        this.value.id = id;
      } else {
        this.value = new ConfigDetail();
      }

    });
  }

  ngOnInit() {

  }

  save() {
    if (!this.value.id) {
      this.cloudConfigs.push(this.value);
      this.value.id = this.cloudConfigs.length;
    }
    ons.notification.toast('保存成功!', {timeout: 2000});
  }
}
