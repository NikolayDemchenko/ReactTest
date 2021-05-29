import { BaseComponent } from './BaseComponent';
import { ComponentContainer } from './Components';
import {
  Properties,
  PropsType,
} from './Properties';

export type ComponentType = {
  type: string;
  props?: PropsType;
  children?: ChildrenType;
};
export type ChildType = string | ComponentType;
export type ChildrenType = ChildType[];

export class Children {
  private children: ChildrenType;
  constructor(children: ChildrenType) {
    this.children = children;
  }

  add(child: ChildType): void {
    this.children.push(child);
  }

  remove(child: ChildType): void {
    this.children = this.children.filter(
      (_child) => JSON.stringify(_child) !== JSON.stringify(child)
    );
  }

  removeByIndex(index: number): void {
    if (index > -1 && this.children.length > 0) {
      this.children.splice(index, 1);
    }
  }
  updateByIndex(index: number, child: ChildType): void {
    if (index > -1 && this.children.length > 0) {
      this.children = this.children.map((_child, _index) => {
        if (_index === index) {
          return child;
        } else {
          return _child;
        }
      });
    }
  }

  render = () => {
    return this.children.map((child) =>
      typeof child === "string"
        ? child
        : (child.children &&
            new ComponentContainer(
              new BaseComponent(child.type, new Properties(child.props || {})),
              new Children(child.children)
            ).render()) ||
          new BaseComponent(
            child.type,
            new Properties(child.props || {})
          ).render()
    );
  };
}
