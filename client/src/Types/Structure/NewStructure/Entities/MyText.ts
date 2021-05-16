import React from 'react';

import {
  IData,
  IRender,
} from '../Interfaces';
import { MyComponent } from './MyComponent';

export class MyText implements IData, IRender {
  private _text: string;
  public get text(): string {
    return this._text;
  }
  private _component: MyComponent;
  public get component(): MyComponent {
    return this._component;
  }
  setData = (text: string) => (this._text = text);
  render = () =>
    React.createElement(
      this.component.tag,
      { key: this.component._id, ...this.component.props },
      this.text
    );
  getData = () => ({ text: this._text, component: this.component.getData() });
  constructor(text: string, component?: MyComponent) {
    this._component = component || new MyComponent();
    this._text = text;
  }
}
