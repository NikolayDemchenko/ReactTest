import React from 'react';

import {
  IData,
  IRender,
} from '../Interfaces';
import { MyArray } from './MyArray';
import { MyComponent } from './MyComponent';
import { MyText } from './MyText';

export class MyVariable  implements IData, IRender {

  private _component: MyComponent;
  public get component(): MyComponent {
    return this._component;
  }
  private _name: MyText;
  public get name(): MyText {
    return this._name;
  }
  private _value: MyText | MyArray;
  public get value(): MyText | MyArray {
    return this._value;
  }
  setData = (name: MyText, value: MyText | MyArray) => {
    this._name = name;
    this._value = value;
  };
  render = () =>
    React.createElement(
      this.component.tag,
      { key: this.component._id, ...this.component.props }, [
      this.name.render(),
      this.value.render(),
    ]);
  getData = () => ({
    name: this._name.getData(),
    value: this._value.getData(), component: this.component.getData() 
  });
  constructor(
    name: MyText,
    value: MyText | MyArray,
    component?: MyComponent,
  ) {  
    this._name = name;
    this._value = value;
    this._component = component || new MyComponent();
  }
}
