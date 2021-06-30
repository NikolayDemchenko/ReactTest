import {
  createElement,
  FC,
} from 'react';

export interface IMyComponent {
  component: FC;
  renderTo(component: IMyContainerComponent): void;
}

interface IMyContainerComponent extends IMyComponent {
  addChildren(child: IMyComponent): void;
}

abstract class MyComponent implements IMyComponent {
  tag: string;
  props: { [key: string]: any };
  constructor(tag: string, props: { [key: string]: any }) {
    this.tag = tag;
    this.props = props;
  }
  abstract component: FC;
  renderTo(component: IMyContainerComponent): void {
    component.addChildren(this);
  }
}

export class BaseElement extends MyComponent implements IMyComponent {
  constructor(tag: string, props: { [key: string]: any }) {
    super(tag, props);
  }
  component: FC = () => {
    return createElement(this.tag, this.props);
  };
}

export class Container extends MyComponent implements IMyContainerComponent {
  children: IMyComponent[];
  /**
   *
   */
  constructor(
    tag: string,
    props: { [key: string]: any },
    children?: IMyComponent[]
  ) {
    super(tag, props);
    this.children = children || [];
  }

  addChildren(child: IMyComponent): void {
    this.children.push(child);
  }

  component: FC = (props) => {
    return createElement(this.tag, this.props, [
      this.children.map((child) => child.component(props)),
    ]);
  };
}
