import { Component, OnInit } from '@angular/core';
import * as ons from 'onsenui';
import {IotService} from '../iot.service';

@Component({
  selector: 'app-cook',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.css']
})
export class CookComponent implements OnInit {

  constructor(private iotService: IotService) { }

  ngOnInit() {
  }

  toastStart() {
    this.iotService.postCook().subscribe(result => console.log(result));
    ons.notification.toast('已同步至终端,在臻美味智能酱料罐上按开始键后即出蘸料!', {timeout: 5000});
  }

  toastSync() {
    ons.notification.toast('搜藏成功!', {timeout: 2000});
  }
}
