import React from 'react';

export interface IComponent {
    tag: string;
    props: { [key: string]: any };
    render: (data: any) => React.DOMElement<{ [key: string]: any }, Element>;
  }
export class Component implements IComponent {
    tag: string;
    props: { [key: string]: any };
    render: (data: any) => React.DOMElement<{ [key: string]: any }, Element>;
    constructor(tag: string, props?: { [key: string]: any }) {
      this.tag = tag;
      this.props = props||{};  
      this.render = (data) => React.createElement(this.tag, this.props, data);
    }
  }