import { Component, OnInit } from '@angular/core';
import {ConfigDetail} from '../config-detail/configDetail';
import {MockService} from '../mock.service';
import * as ons from 'onsenui';
import {IotService} from '../iot.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  now = new Date();
  iotConfigs: Array<ConfigDetail>;
  cloudConfigs: Array<ConfigDetail>;
  constructor(private iotService: IotService) {
    this.iotConfigs = MockService.getIotConfigs();
    this.cloudConfigs = MockService.getCloudConfigs();
  }

  ngOnInit() {
  }
  showActionSheet(id: number, event: Event) {
    const that = this;
    event.stopPropagation();
    const slotArr: any = this.iotConfigs.map(function(item, index) {
      const name = item.name;
      if (name) {
        return {
          label: index + ': ' + name,
          modifier: 'destructive'
        };
      } else {
        return index + ': (空)';
      }
    });
    slotArr.push(
        {
          label: '取消',
          icon: 'md-close'
        }
    );
    ons.openActionSheet({
      title: '请选择编号:',
      cancelable: true,
      buttons: slotArr,
      animation: 'default',
      callback: function(i) { that.checkAndUpdate(id, i); }
    });
  }
  checkAndUpdate(id, to) {
    console.log(id + ',' + to);
    if (to > 7) {
      return;
    }
    if (this.iotConfigs[to].name) {
      ons.notification.confirm({
        message: `编号${to}已存在配置:${this.iotConfigs[to].name},确定覆盖为${this.cloudConfigs[id].name}吗?`,
        title: '注意',
        cancelable: true,
        callback: i => {
          if (i !== -1) {
            this.update(id, to);
          }
        }
      });
    } else {
      this.update(id, to);
    }
  }
  update(id, to) {
    const cloudCook: any = this.cloudConfigs[id];
    cloudCook.order = to;
    this.iotService.postCook(cloudCook).subscribe(
    data => {
        console.log(data);
        this.iotConfigs[to] = cloudCook;
        ons.notification.toast('上传成功!', {timeout: 2000});
        this.now = new Date();
      },
      error => {
        ons.notification.toast('上传失败!', {timeout: 2000});
        console.error(error);
      }
    );
  }
}
