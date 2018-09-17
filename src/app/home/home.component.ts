import { Component, OnInit } from '@angular/core';
import {ChartData} from '../chart/ChartData';
import { graphic } from 'echarts';
import {MockService} from '../mock.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  now = new Date();
  bottles: Array<any>;
  chartDataArr: Array<ChartData>;
  optionsSalt: any;
  optionsDiet: any;
  healthTip: string;
  constructor() {
  }

  ngOnInit() {
    this.bottles = MockService.getBottleStatus()
    this.chartDataArr = MockService.getCostHis();
    this.optionsSalt = MockService.getOptionsSalt();
    this.optionsDiet = MockService.getOptionsDiet();
    this.healthTip = MockService.getHealthTip();
  }
}
