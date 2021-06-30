import {
  BaseElement,
  Container,
  IMyComponent,
} from './Elements';

export class VoidElementFactory {
  tag: string;
  className: string;
  сontainer: Container;
  constructor(tag: string, className: string, сontainer: Container) {
    this.сontainer = сontainer;
    this.tag = tag;
    this.className = className;
  }
  createWithProps = (element: IMyComponent) => {
    element.renderTo(this.сontainer);
    return element;
  };
}

export class ImageFactory {
  factory: VoidElementFactory;
  constructor(factory: VoidElementFactory) {
    this.factory = factory;
  }

  createImageByURL = (url: string) =>
    this.factory.createWithProps(
      new BaseElement(this.factory.tag, {
        className: this.factory.className,
        src: url,
      })
    );
}

export class StringFactory {
  factory: VoidElementFactory;
  constructor(factory: VoidElementFactory) {
    this.factory = factory;
  }
  createText = (text: string) =>
    this.factory.createWithProps(
      new BaseElement(this.factory.tag, {
        className: this.factory.className,
        children: text,
      })
    );
}
