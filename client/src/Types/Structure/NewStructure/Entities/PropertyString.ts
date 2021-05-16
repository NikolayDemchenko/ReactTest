import React from 'react';

import {
  IComponent,
  TData,
} from '../Interfaces';
import { Title } from './Title';

export class PropertyString extends Title implements IComponent {
  private _data: string;
  public get data(): string {
    return this._data;
  }
  setData: (data: string) => void = (data) => {
    this._data = data;
  };
  getData: () => TData;
  render: () => React.DOMElement<{ [key: string]: any }, Element>;
  constructor(title: string, data: string) {
    super(title);
    this._data = data;
    this.render = () => {
      return React.createElement("div", {}, [this.title, this._data]);
    };
    this.getData = () => ({ title: this.title, data: this._data });
  }
}
