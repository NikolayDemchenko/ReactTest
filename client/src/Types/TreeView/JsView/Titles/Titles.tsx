import React, { FC } from 'react';

import jss, { JssStyle } from 'jss';
import preset from 'jss-preset-default';

const array = {
  color: "#9af",
  "mix-blend-mode": "difference",
};
const arrayElement = {
  color: "#abf",
  "mix-blend-mode": "difference",
};
const object = {
  border:"1px solid #fff",
  color: "#999",
  "mix-blend-mode": "difference",
};
const property = {
  color: "#aaa",
  "mix-blend-mode": "difference",
};
const key = {
  color: "#aaf",
  "mix-blend-mode": "difference",
};
const value = {
  color: "#aaf",
  "mix-blend-mode": "difference",
};
const string = {
  color: "#cdf",
  "mix-blend-mode": "difference",
};
const number = {
  color: "#aaf",
  "mix-blend-mode": "difference",
};
const boolean = {
  color: "#22f",
  "mix-blend-mode": "difference",
};


export class TitlesStyles {
  private _array: JssStyle = array;
  private _arrayElement: JssStyle = arrayElement;
  private _object: JssStyle = object;
  private _property: JssStyle = property;
  private _key: JssStyle = key;
  private _value: JssStyle = value;
  private _string: JssStyle = string;
  private _number: JssStyle = number;
  private _boolean: JssStyle = boolean;

  private _Array!: FC;
  public get Array(): FC {
    return this._Array;
  }
  setArray(arr: JssStyle) {
    this._array = arr;
    this.render();
  }
  private _ArrayElement!: FC;
  public get ArrayElement(): FC {
    return this._ArrayElement;
  }
  setArrayElement(arr_el: JssStyle) {
    this._arrayElement = arr_el;
    this.render();
  }
  private _Object!: FC;
  public get Object(): FC {
    return this._Object;
  }
  setObject(obj: JssStyle) {
    this._object = obj;
    this.render();
  }
  private _Property!: FC;
  public get Property(): FC {
    return this._Property;
  }
  setProperty(prop: JssStyle) {
    this._property = prop;
    this.render();
  }
  private _Key!: FC;
  public get Key(): FC {
    return this._Key;
  }
  setKey(key: JssStyle) {
    this._key = key;
    this.render();
  }
  private _Value!: FC;
  public get Value(): FC {
    return this._Value;
  }
  setValue(value: JssStyle) {
    this._value = value;
    this.render();
  }
  private _String!: FC;
  public get String(): FC {
    return this._String;
  }
  setString(string: JssStyle) {
    this._string = string;
    this.render();
  }
  private _Number!: FC;
  public get Number(): FC {
    return this._Number;
  }
  setNumber(number: JssStyle) {
    this._number = number;
    this.render();
  }
  private _Boolean!: FC;
  public get Boolean(): FC {
    return this._Boolean;
  }
  setBoolean(boolean: JssStyle) {
    this._boolean = boolean;
    this.render();
  }

  constructor() {
    this.render();
  }
  private getTypeFC = (className: string,type:string): FC => ({children}) => (
    <div className={className}>{type}{children}</div>
  );
  private render() {
    jss.setup(preset());
    const { classes } = jss
      .createStyleSheet({
        array: this._array,
        arrayElement: this._arrayElement,
        object: this._object,
        property: this._property,
        key: this._key,
        value: this._value,
        string: this._string,
        number: this._number,
        boolean: this._boolean,
      })
      .attach();

    this._Array = this.getTypeFC(classes.array," Array: ");
    this._ArrayElement = this.getTypeFC(classes.arrayElement," Element: ");
    this._Object = this.getTypeFC(classes.object," Object: ");
    this._Property = this.getTypeFC(classes.property," Property: ");
    this._Key = this.getTypeFC(classes.key," Key: ");
    this._Value = this.getTypeFC(classes.value," Value: ");
    this._String = this.getTypeFC(classes.string," string: ");
    this._Number = this.getTypeFC(classes.number," number: ");
    this._Boolean = this.getTypeFC(classes.boolean," boolean: ");
  }
}
