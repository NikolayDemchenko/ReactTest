import React from 'react';

import { Component } from './Component';

export class VoidComponent extends Component {
  propertyForRenderData: string | undefined;  
  constructor(tag: string, props?: { [key: string]: any }) {
    super(tag, props);
    this.render = (data) => {
      if (this.propertyForRenderData) this.props[this.propertyForRenderData] = data;
      return React.createElement(this.tag, this.props);
    };
  }
}
