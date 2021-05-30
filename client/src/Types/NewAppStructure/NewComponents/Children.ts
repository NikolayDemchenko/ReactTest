import {
  Element,
  ElementView,
} from './Element';
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
  value = () => this.children;
}

export class ChildrenView {
  private children: Children;
  constructor(children: Children) {
    this.children = children;
  }

  render = () => {
    return this.children
      .value()
      .map((element) =>
        typeof element === "string"
          ? element
          : (element.children &&
              new ElementView(
                new Element(element.type, new Properties(element.props || {}))
              ).render(new ChildrenView(new Children(element.children)))) ||
            new ElementView(
              new Element(element.type, new Properties(element.props || {}))
            ).render()
      );
  };
}
