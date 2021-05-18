import shortid from 'shortid';

import { IData } from '../../Interfaces';
import { MyObject } from './MyObject';

export class MyReactElement implements IData {
  readonly _id: string;
  private _tag: string;
  public get tag(): string {
    return this._tag;
  }

  private _props: MyObject;
  public get props(): MyObject {
    return this._props;
  }
  setData = (tag?: string, props?: MyObject) => {
    this._tag = tag || this._tag;
    this._props = props || this._props;
  };
  getData = () => ({
    _id: this._id,
    tag: this.tag,
    props: this.props.getData(),
  });
  constructor(_id?: string, tag?: string, props?: MyObject) {
    this._id = _id || shortid.generate();
    this._tag = tag || "div";
    this._props = props || new MyObject({});
  }
}
