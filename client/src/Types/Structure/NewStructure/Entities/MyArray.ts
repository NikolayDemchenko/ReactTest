import React from 'react';

import {
  ICollection,
  IData,
  IMyArrayData,
  IRender,
  MyElement,
} from '../Interfaces';
import { MyBaseComponent } from './BaseComponent/MyBaseComponent';
import { MyReactElement } from './BaseComponent/MyReactElement';

export class MyArray
  extends MyBaseComponent
  implements IData, IRender, ICollection
{
  private _collection: MyElement[];
  public get collection(): MyElement[] {
    return this._collection;
  }

  constructor(collection: MyElement[], element?: MyReactElement) {
    super(element);
    this._collection = collection;
  }

  setData: Function = (collection: MyElement[], element?: MyReactElement) => {
    this._collection = collection;
    element && this.element.setData(element.tag, element.props);
  };
  
  getData: () => IMyArrayData = () => ({
    collection: this._collection.map((property) => property.getData()),
    element: this.element.getData(),
  });

  add = (element: MyElement) => this._collection.push(element);
  remove = (element: MyElement) => {
    if (this._collection)
      this._collection = this._collection.filter((item) => item !== element);
  };

  render: () => React.DOMElement<{ [key: string]: any }, Element> = () =>
    this.baseRender(this._collection.map((property) => property.render()));
}
