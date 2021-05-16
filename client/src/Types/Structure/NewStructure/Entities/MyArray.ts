import React from 'react';

import {
  IComponent,
  TClassProperty,
  TData,
  TDataProperty,
} from '../Interfaces';

export class Container implements IComponent {
  private _array: TClassProperty[];
  public get array(): TClassProperty[] {
    return this._array;
  }
  constructor(array: TClassProperty[]) {
    this._array = array;
    this.render = () => {
      return React.createElement(
        "div",
        {},
        this._array.map((property) => property.render())
      );
    };
    this.getData = () =>
      this._array.map((property) => property.getData() as TDataProperty);
  }
  getData: () => TData;
  render: () => React.DOMElement<{ [key: string]: any }, Element>;

  add: (dataProp: TClassProperty) => void = (dataProp) => {
    this._array.push(dataProp);
  };
  remove: (dataProp: TClassProperty) => void = (dataProp) => {
    if (this._array)
      this._array = this._array.filter((item) => item !== dataProp);
  };
}
