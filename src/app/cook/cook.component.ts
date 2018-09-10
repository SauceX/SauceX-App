import { Component, OnInit } from '@angular/core';
import * as ons from 'onsenui';
import { Http } from '@angular/http';
import { Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-cook',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.css']
})
export class CookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toastStart() {
    const data = new URLSearchParams();
    const bodyData = {
      'UUID': 'nullfy6HS'
    };
    data.append('body', JSON.stringify(bodyData));
    data.append('tradeCode', '0002');
    data.append('tradeType', 'authService');
    this.http.post('', data, this.options);

    ons.notification.toast('已同步至终端,在臻美味智能酱料罐上按开始键后即出蘸料!', {timeout: 5000});
  }

  toastSync() {
    ons.notification.toast('搜藏成功!', {timeout: 2000});
  }
}
