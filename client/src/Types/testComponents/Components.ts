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
  props: {[key:string]:any}
  constructor(tag: string, props: {[key:string]:any}) {
    this.tag = tag;  
    this.props = props;  
  }
  abstract component: FC;
  renderTo(component: IMyContainerComponent): void {
    component.addChildren(this);
  }
}

class BaseElement<T> extends MyComponent implements IMyComponent { 
  constructor(tag: string, props: {[key:string]:any}) {
    super(tag, props);
  }
  component:FC = () => {
    return createElement(this.tag, this.props);
  };
}
class Container extends MyComponent implements IMyContainerComponent {
  children: IMyComponent[];
  /**
   *
   */
  constructor(tag: string, props: {[key:string]:any}, children?: IMyComponent[]) {
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

class BaseFactory {
  private tag: string;
  private className: string;
  сontainer: Container;
  constructor(tag: string, className: string, сontainer: Container) {
    this.сontainer = сontainer;
    this.tag = tag;
    this.className = className;
  }
  create = (props: {[key:string]:any}) => {
    const element=new BaseElement(this.tag, {className:this.className,...props});
    element.renderTo(this.сontainer);
   return element
  };
}

class ImageFactory {
factory:BaseFactory
  constructor(factory:BaseFactory) {
    this.factory = factory;
  }
  create = (src: string) => this.factory.create({src})
}

class StringFactory {
factory:BaseFactory
  constructor(factory:BaseFactory) {
    this.factory = factory;
  }
  create = (text: string) => this.factory.create({children:text})
}



const сontainer = new Container("div", {className:"title"});
const сontainer1 = new Container("div", {className:"title"});
const сontainer2 = new Container("div",{className: "title"})

const title = new StringFactory(new BaseFactory("h1", "title",сontainer1));
const image = new ImageFactory(new BaseFactory("img", "title",сontainer1));
const text = new StringFactory(new BaseFactory("span", "title",сontainer1));

title.create("Некий текст");
title.create("Некий текст");
title.create("Некий текст");
image.create("https://pbs.twimg.com/media/DbLTMIJXcAE3RDE.jpg");
image.create("https://pbs.twimg.com/media/DbLTMIJXcAE3RDE.jpg");
image.create("https://pbs.twimg.com/media/DbLTMIJXcAE3RDE.jpg");

const copytext=text.create("Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст ");
image.create("https://pbs.twimg.com/media/DbLTMIJXcAE3RDE.jpg");
title.create("Вот так");
title.create("Некий текст");
image.create("https://pbs.twimg.com/media/DbLTMIJXcAE3RDE.jpg");
copytext.renderTo(сontainer1)
title.create("Некий текст");
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
