export class Bottle {
  get color(): Color {
    return this._color;
  }
  set color(value: Color) {
    this._color = value;
  }
  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }
  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }
  private _value = 0;
  private _label: string;
  private _color: Color;
}
export enum Color {
  green = 'green',
  orange = 'orange',
  red = 'red'
}
