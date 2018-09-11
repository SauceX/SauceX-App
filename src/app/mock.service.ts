import { Injectable } from '@angular/core';
import {ConfigDetail} from './config-detail/configDetail';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  constructor() { }

  public getIotConfigs(): Array<any> {
    return [
      {name: '默认配置'},
      {name: '老婆的饺子蘸料'},
      {name: '北京烤鸭完美组合'},
      {name: '某种神秘酱料'},
      {},
      {},
      {},
      {},
      ];
  }
  public getCloudConfigs(): Array<any> {
    return [
      {name: '老婆的饺子蘸料'},
      {name: '北京烤鸭完美组合'},
      {name: '五香牛肉-网红推荐'},
      {name: '健康饮食推荐'},
      ];
  }
}
