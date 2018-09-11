export class ConfigDetail {
  get mix(): boolean {
    return this._mix;
  }

  set mix(value: boolean) {
    this._mix = value;
  }
  static BottleSet: Array<string> = ['酱油', '醋', '香油', '料酒'];
  get values(): Array<number> {
    return this._values;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  private _name = '';
  private _values: Array<number> = [0, 0, 0, 0];
  private _mix = false ;
}
