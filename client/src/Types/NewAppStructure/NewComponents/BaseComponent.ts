import React, { createElement } from 'react';

import { Children } from './Children';
import { Properties } from './Properties';

export class BaseComponent {
  private type: string;
  private props: Properties;

  constructor(type: string, props: Properties) {
    this.type = type;
    this.props = props;
  }
  render = (children?: Children): React.ReactElement => {
    if (children) {
      return createElement(
        this.type,
        this.props.value(),
        children.render()
      );
    } else {
      return createElement(this.type, this.props.value());
    }
  };
}
