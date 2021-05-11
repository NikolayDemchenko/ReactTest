import React from 'react';

export interface IBaseComponent {
  tag: string;
  props: { [key: string]: any };
  render: (data: any) => React.DOMElement<{ [key: string]: any }, Element>;
}
export type TChild = string | React.DOMElement<{ [key: string]: any }, Element>;
export interface IChildren  {[index:number]:TChild};

export interface IVoidComponent extends IBaseComponent {
  valueAttribute: string | undefined;
}
export interface IContainerComponent extends IBaseComponent {
  children?: IChildren;
}

export abstract class BaseComponent implements IBaseComponent {
  tag: string;
  props: { [key: string]: any };
  abstract render: (
    data: any
  ) => React.DOMElement<{ [key: string]: any }, Element>;
  constructor(tag: string, props?: { [key: string]: any }) {
    this.tag = tag;
    this.props = props || {};
  }
}
export class Container extends BaseComponent implements IContainerComponent {
  children?: IChildren;
  render: (data?: any) => React.DOMElement<{ [key: string]: any }, Element>;
  constructor(
    tag: string,
    props?: { [key: string]: any },
    children?: IChildren
  ) {
    super(tag, props);
    this.tag = tag;
    this.props = props || {};
    this.children = children;
    this.render = (children?) => {
      if (children) {
        this.children = children;
      }
      return React.createElement(this.tag, this.props, this.children);
    };
  }
}

export class Void extends BaseComponent implements IVoidComponent {
  render: (data: any) => React.DOMElement<{ [key: string]: any }, Element>;
  valueAttribute: string | undefined;
  constructor(
    tag: string,
    props?: { [key: string]: any },
    valueAttribute?: string | undefined
  ) {
    super(tag, props);
    this.valueAttribute = valueAttribute;
    this.render = (data) => {
      if (this.valueAttribute) this.props[this.valueAttribute] = data;
      return React.createElement(this.tag, this.props);
    };
  }
}
