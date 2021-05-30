import React, { createElement } from 'react';

import { ChildrenView } from './Children';
import { Properties } from './Properties';

export class Element {
  private type: string;
  private props: Properties;

  constructor(type: string, props: Properties) {
    this.type = type;
    this.props = props;
  }
  value=()=>({type:this.type,props:this.props})
}




export class ElementView {
  private element: Element;
  constructor(element: Element) {
    this.element = element;
   
  }
  render = (childrenView?: ChildrenView): React.ReactElement => {
    if (childrenView) {
      return createElement(
        this.element.value().type,
        this.element.value().props.value(),
        childrenView.render()
      );
    } else {
      return createElement(this.element.value().type,
      this.element.value().props.value(),);
    }
  };
}
