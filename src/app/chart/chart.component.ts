import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { graphic } from 'echarts';
import { ControlValueAccessor } from '@angular/forms/src/directives';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import {ChartData} from "./ChartData";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChartComponent),
      multi: true
    }
  ],
})
export class ChartComponent implements OnInit, ControlValueAccessor {
  private  innerValue: Array<ChartData> = [];
  options: any;
  private  onTouchedCallback: () => void = function() {};
  private  onChangeCallback: (_: any) => void = function() {};
  get value(): any {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }
  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
    if (this.innerValue) {
      this.ngOnInit();
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }



  constructor() { }

  ngOnInit() {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 50; i < 100; i++) {
      const day = new Date();
      day.setDate(day.getDate() - (100 - i));
      xAxisData.push(day.getMonth() + '-' + day.getDate());
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
      legend: {
        data: [],
        align: 'left'
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false
        }
      },
      yAxis: {
      },
      series: [],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    };
    this.drawData();
  }
  drawData() {

    for (const data: ChartData of this.innerValue) {
      this.options.legend.data.push(data.name);
      this.options.series.push({
        name: data.name,
        type: 'bar',
        data: data.data,
        animationDelay: function (idx) {
          return idx * 10;
        }
      });
    }
  }

}
