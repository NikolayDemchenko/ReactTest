import {
  IData,
  IRender,
} from '../Interfaces';
import { MyArray } from './MyArray';
import { MyBaseComponent } from './MyBaseComponent';
import { MyReactElement } from './MyReactElement';
import { MyText } from './MyText';

export class MyVariable extends MyBaseComponent implements IData, IRender {
  private _key: MyText;
  public get key(): MyText {
    return this._key;
  }
  private _value: MyText | MyArray;
  public get value(): MyText | MyArray {
    return this._value;
  }

  constructor(key: MyText, value: MyText | MyArray, element?: MyReactElement) {
    super(element);
    this._key = key;
    this._value = value;
  }

  setData = (
    key: MyText,
    value: MyText | MyArray,
    element?: MyReactElement
  ) => {
    this._key = key;
    this._value = value;
    element && this.element.setData(element.tag, element.props);
  };

  getData = () => ({
    key: this._key.getData(),
    value: this._value.getData(),
    element: this.element.getData(),
  });

  render = () => this.baseRender([this.key.render(), this.value.render()]);
}
