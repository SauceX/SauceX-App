import { Component, OnInit } from '@angular/core';
import {Bottle, Color} from '../bottle/bottle';
import {ChartData} from '../chart/ChartData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  now = new Date();
  bottles = [
    {'label': '酱油', 'color': Color.orange, 'value': 22},
    {'label': '醋', 'color': Color.green, 'value': 55},
    {'label': '料酒', 'color': Color.red, 'value': 75},
    {'label': '香油', 'color': Color.orange, 'value': 92}
  ];

  chartDataArr: Array<ChartData> = [];
  chartData_01: ChartData;
  chartData_02: ChartData;
  constructor() {

  }

  ngOnInit() {
    this.chartData_01 = new ChartData();
    this.chartData_01.name = '酱油01';
    this.chartData_01.data = [];
    for (let i = 0; i < 50; i++) {
      this.chartData_01.data.push(Math.floor(Math.random() * 120));
    }
    this.chartData_02 = new ChartData();
    this.chartData_02.name = '醋02';
    this.chartData_02.data = [];
    for (let i = 0; i < 50; i++) {
      this.chartData_02.data.push(Math.floor(Math.random() * 70));
    }
    this.chartDataArr.push(this.chartData_01);
    this.chartDataArr.push(this.chartData_02);
    console.log(JSON.stringify(this.chartDataArr));
  }

}
