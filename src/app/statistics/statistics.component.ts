import { Component, OnInit } from '@angular/core';
import {ChartData} from '../chart/ChartData';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  chartDataArr: Array<ChartData> = [];
  chartData_01: ChartData;
  chartData_02: ChartData;
  constructor() { }

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
