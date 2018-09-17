import { Injectable } from '@angular/core';
import { graphic } from 'echarts';
import {ChartData} from './chart/ChartData';
import {Color} from './bottle/bottle';

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
  public static getBottleStatus(): Array<any> {
    return [
      {'label': '酱油', 'color': Color.orange, 'value': 22},
      {'label': '醋', 'color': Color.green, 'value': 55},
      {'label': '香油', 'color': Color.red, 'value': 75},
      {'label': '料酒', 'color': Color.orange, 'value': 92}
    ];
  }
  public static getCostHis(): Array<any> {
    const chartDataArr: Array<ChartData> = [];
    let chartData_01: ChartData;
    let chartData_02: ChartData;
    chartData_01 = new ChartData();
    chartData_01.name = '酱油01';
    chartData_01.data = [];
    for (let i = 0; i < 50; i++) {
      chartData_01.data.push(Math.floor(Math.random() * 120));
    }
    chartData_02 = new ChartData();
    chartData_02.name = '醋02';
    chartData_02.data = [];
    for (let i = 0; i < 50; i++) {
      chartData_02.data.push(Math.floor(Math.random() * 70));
    }
    chartDataArr.push(chartData_01);
    chartDataArr.push(chartData_02);
    console.log(JSON.stringify(chartDataArr));
    return chartDataArr;
  }
  public static getOptionsDiet(): any {
    return {
      title: {
        text: '营养物质摄入比例',
        subtext: '近5日平均值',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        x: 'center',
        y: 'bottom',
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
      },
      calculable: true,
      series: [
        {
          name: '日均摄入(g)',
          type: 'pie',
          radius: [30, 110],
          roseType: 'area',
          data: [
            {value: 500, name: '碳水化合物'},
            {value: 25, name: '脂肪'},
            {value: 15, name: '蛋白质'},
          ]
        }
      ]
    };
  }
  public static getOptionsSalt(): any {
    const xAxisData = [];
    for (let i = 0; i < 20; i++) {
      const day = new Date();
      day.setDate(day.getDate() - (20 - i));
      xAxisData.push((day.getMonth() + 1) + '-' + day.getDate());
    }
    return {
      title: {
        text: '最近20天钠盐摄入量(10mg)'
      },
      xAxis: {
        data: xAxisData,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        z: 10
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#999'
          }
        }
      },
      dataZoom: [
        {
          type: 'inside'
        }
      ],
      series: [
        { // For shadow
          type: 'bar',
          itemStyle: {
            normal: { color: 'rgba(0,0,0,0.05)' }
          },
          barGap: '-100%',
          barCategoryGap: '40%',
          data: [],
          animation: false
        },
        {
          type: 'bar',
          itemStyle: {
            normal: {
              color: new graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#83bff6' },
                  { offset: 0.5, color: '#188df0' },
                  { offset: 1, color: '#188df0' }
                ]
              )
            },
            emphasis: {
              color: new graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#2378f7' },
                  { offset: 0.7, color: '#2378f7' },
                  { offset: 1, color: '#83bff6' }
                ]
              )
            }
          },
          data: [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220]
        }
      ]
    };
  }

  public static getHealthTip() {
    return '您摄入的碳水化合物比例过高, 容易引起肥胖和营养不良。建议适当增加蛋奶鱼肉等富含蛋白质的食物。钠盐的摄入量在合理范围内。如果从事体育锻炼或体力劳动, 可适当增加钠盐摄入。'
  }
}
