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
const baseType = {
  color: "#22f",
  "mix-blend-mode": "difference",
};


export class ViewColor {
  private _array: JssStyle = array;
  private _arrayElement: JssStyle = arrayElement;
  private _object: JssStyle = object;
  private _property: JssStyle = property;
  private _key: JssStyle = key;
  private _value: JssStyle = value;
  private _baseType: JssStyle = baseType;

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
  private _BaseType!: FC;
  public get BaseType(): FC {
    return this._BaseType;
  }
  setBaseType(baseType: JssStyle) {
    this._baseType = baseType;
    this.render();
  }

  constructor() {
    this.render();
  }
  private getTypeFC = (className: string): FC => ({ children }) => (
    <span className={className}>{children}</span>
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
        baseType: this._baseType,
      })
      .attach();

    this._Array = this.getTypeFC(classes.array);
    this._ArrayElement = this.getTypeFC(classes.arrayElement);
    this._Object = this.getTypeFC(classes.object);
    this._Property = this.getTypeFC(classes.property);
    this._Key = this.getTypeFC(classes.key);
    this._Value = this.getTypeFC(classes.value);
    this._BaseType = this.getTypeFC(classes.baseType);
  }
}
