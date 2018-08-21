import { Component, OnInit } from '@angular/core';
import {Bottle, Color} from '../bottle/bottle';

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
  constructor() {
    // const bottle: Bottle = new Bottle();
    // bottle.value = 22;
    // bottle.color = Color.green;
    // bottle.label = '酱油';
    // const bottle2: Bottle = new Bottle();
    // bottle2.value = 88;
    // bottle2.color = Color.red;
    // bottle2.label = '醋';
    // this.bottles.push(bottle);
    // this.bottles.push(bottle2);
  }

  ngOnInit() {
  }

}
