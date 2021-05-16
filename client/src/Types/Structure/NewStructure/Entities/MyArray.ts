import React from 'react';

import {
  IData,
  IMyArrayData,
  IRender,
  MyElement,
} from '../Interfaces';
import { MyComponent } from './MyComponent';

export class MyArray   implements IData, IRender {
  private _component: MyComponent;
  public get component(): MyComponent {
    return this._component;
  }
  private _array: MyElement[];
  public get array(): MyElement[] {
    return this._array;
  }
  render: () => React.DOMElement<{ [key: string]: any }, Element> = () =>
    React.createElement(
      
      this.component.tag,
      { key: this.component._id, ...this.component.props },
      this._array.map((property) => property.render())
    );

  setData: Function = (array: MyElement[]) => {
    this._array = array;
  };
  getData: () => IMyArrayData = () => ({
    array: this._array.map((property) => property.getData()),
    component: this.component.getData() ,
  });
  constructor(
    array: MyElement[],
    component?: MyComponent,
  ) {
    this._component = component || new MyComponent();
    this._array = array;
  }

  add: (element: MyElement) => void = (element) => {
    this._array.push(element);
  };
  remove: (element: MyElement) => void = (element) => {
    if (this._array)
      this._array = this._array.filter((item) => item !== element);
  };
}
