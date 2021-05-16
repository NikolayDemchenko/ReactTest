import React from 'react';

import {
  IComponent,
  TData,
  TDataProperty,
} from '../Interfaces';
import { Container } from './MyArray';
import { Title } from './Title';

export class PropertyArray extends Title implements IComponent {
  private _data: Container;
  public get data(): Container {
    return this._data;
  }
  render: () => React.DOMElement<{ [key: string]: any }, Element>;
  getData: () => TData;
  constructor(title: string, data: Container) {
    super(title);
    this._data = data;
    this.render = () => {
      return React.createElement("div", {}, [this.title, this._data.render()]);
    };
    const newdata = this._data.getData();
    this.getData = () => ({
      title: this.title,
      data: this._data.getData() as TDataProperty[],
    });
  }
}
