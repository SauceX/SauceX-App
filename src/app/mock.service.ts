import { Injectable } from '@angular/core';
import {ConfigDetail} from './config-detail/configDetail';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  static iotConfigs: Array<any> = [
    {name: '默认配置', values: [20, 5, 0, 0]},
    {name: '老婆的饺子蘸料', values: [33, 35, 2, 2]},
    {name: '北京烤鸭完美组合', values: [33, 2, 2, 0]},
    {name: '某种神秘酱料', values: [69, 69, 69, 69]},
    {},
    {},
    {},
    {},
  ];
  static cloudConfigs = [
    {name: '老婆的饺子蘸料', values: [33, 35, 2, 2]},
    {name: '北京烤鸭完美组合', values: [33, 2, 2, 0]},
    {name: '五香牛肉-网红推荐', values: [20, 0, 4, 4]},
    {name: '健康饮食推荐', values: [1, 1, 1, 1]},
  ];
  constructor() { }
  public static getIotConfigs(): Array<any> {
    return MockService.iotConfigs;
  }
  public static getCloudConfigs(): Array<any> {
    return MockService.cloudConfigs;
  }
}
