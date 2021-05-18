import React from 'react';

import { MyReactElement } from './MyReactElement';

export class MyBaseComponent {
  private _element: MyReactElement;
  public get element(): MyReactElement {
    return this._element;
  }

  //   getData = () => ({ element: this.element });
  //   setData = (element: MyReactElement) => (this._element = element);
  baseRender = (...children: React.ReactNode[]) =>
    React.createElement(
      this.element.tag,
      { key: this.element._id, ...this.element.props.getData() },
      children
    );
  constructor(element?: MyReactElement) {
    this._element = element || new MyReactElement();
  }
}
