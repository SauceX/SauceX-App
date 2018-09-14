import { Component, OnInit } from '@angular/core';
import * as ons from 'onsenui';
import {IotService} from '../iot.service';
import {MockService} from '../mock.service';

@Component({
  selector: 'app-cook',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.css']
})
export class CookComponent implements OnInit {

  constructor(private iotService: IotService) { }
  cloudConfigs = MockService.getCloudConfigs();
  iotConfigs = MockService.getIotConfigs();
  cook: any = {name: '钟水饺的饺子蘸料', order: 0, values: [100, 40, 10, 0]};
  ngOnInit() {
  }

  toastStart() {
    this.iotService.postCook(this.cook).subscribe(
      result => {
        console.log(result);
        this.iotConfigs[0] = this.cook;
        ons.notification.toast('已同步至终端,在臻美味智能酱料罐上按开始键后即出蘸料!', {timeout: 3000});
      },
      error => {
        ons.notification.toast('同步失败!', {timeout: 2000});
        console.error(error);
      }
    );
  }

  toastSync() {
    if (!this.cook.id) {
      this.cloudConfigs.push(this.cook);
      this.cook.id = this.cloudConfigs.length;
    }
    ons.notification.toast('搜藏成功!', {timeout: 2000});
  }
}
