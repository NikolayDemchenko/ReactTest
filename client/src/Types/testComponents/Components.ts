import {
  createElement,
  FC,
} from 'react';

export interface IMyComponent {
  component: FC;
  renderTo(component: IMyContainerComponent): void;
}
interface IMyText extends IMyComponent {}
interface IMyContainerComponent extends IMyComponent {
  addChildren(child: IMyComponent): void;
}

abstract class MyComponent implements IMyComponent {
  tag: string;
  className: string;
  constructor(tag: string, className: string) {
    this.tag = tag;
    this.className = className;
  }
  abstract component: FC;
  renderTo(component: IMyContainerComponent): void {
    component.addChildren(this);
  }
}

class MyElement<T> extends MyComponent implements IMyText {
  private data: T;
  constructor(tag: string, className: string, data: any) {
    super(tag, className);
    this.data = data;
  }
  component: FC = () => {
    return createElement(this.tag, { className: this.className }, this.data);
  };
}
class Container extends MyComponent implements IMyContainerComponent {
  children: IMyComponent[];
  /**
   *
   */
  constructor(tag: string, className: string, children?: IMyComponent[]) {
    super(tag, className);
    this.children = children || [];
  }

  addChildren(child: IMyComponent): void {
    this.children.push(child);
  }

  component: FC = (props) => {
    return createElement(this.tag, { className: this.className }, [
      this.children.map((child) => child.component(props)),
    ]);
  };
}

class StringFactory {
  private tag: string;
  private className: string;
  private сontainer: Container;
  constructor(tag: string, className: string, сontainer: Container) {
    this.сontainer = сontainer;
    this.tag = tag;
    this.className = className;
  }
  create = (data: string) => {
    const element=new MyElement(this.tag, this.className, data);
    element.renderTo(this.сontainer);
   return element
  };
}

const сontainer = new Container("div", "title");
const сontainer1 = new Container("div", "title");
const сontainer2 = new Container("div", "title")

const title = new StringFactory("h1", "title",сontainer1);
const text = new StringFactory("span", "title",сontainer1);

title.create("Некий текст");
title.create("Некий текст");
title.create("Некий текст");
const copytext=text.create("Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст ");
title.create("Вот так");
title.create("Некий текст");
title.create("Некий текст");
copytext.renderTo(сontainer1)
copytext.renderTo(сontainer1)
copytext.renderTo(сontainer1)
copytext.renderTo(сontainer1)
copytext.renderTo(сontainer1)
title.create("Некий текст");
title.create("Некий текст");

сontainer1.renderTo(сontainer);
сontainer2.renderTo(сontainer);
copytext.renderTo(сontainer2)
copytext.renderTo(сontainer2)
export const ContainerComponent = сontainer.component;
