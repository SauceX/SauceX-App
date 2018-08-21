import {Component, forwardRef, Input, Output, ElementRef, OnInit, EventEmitter, ViewChild, ChangeDetectorRef} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessor } from '@angular/forms/src/directives';
import {Bottle} from './bottle';

@Component({
  selector: 'app-bottle',
  templateUrl: './bottle.component.html',
  styleUrls: ['./bottle.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BottleComponent),
      multi: true
    }
  ]
})
export class BottleComponent implements ControlValueAccessor, OnInit {
  constructor(
  ) { }
  @Input() label: string;
  @Input() color = 'green';
  @Input() value: number;
  @ViewChild('rb') inputViewChild: ElementRef;
  @Output() pRadioChange: EventEmitter<any> = new EventEmitter();
  onModelChange: Function = () => { };

  private onTouchedCallback: () => void = function() {};
  private onChangeCallback: (_: any) => void = function() {};

  writeValue(value: any) {
    if (value !== this.value) {
      this.value = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
  ngOnInit() {
  }
}
