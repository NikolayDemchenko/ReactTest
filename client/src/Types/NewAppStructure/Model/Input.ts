import { MyElement } from './MyElement';

export class Input {
  container: MyElement;
  title: MyElement;
  input: MyElement;
  constructor(container: MyElement, title: MyElement, input: MyElement) {
    this.container = container;
    this.title = title;
    this.input = input;
  }
  name = (name: string) => {
    this.container = new MyElement({ ...this.container.value(), id: name });
    this.title = new MyElement(this.title.withNodes([name]).value());
    return this
  };
  element = () => {
    return new MyElement(this.container.value()).withNodes([
      this.title.value(),
      this.input.value(),
    ]);
  };
  inputValue = () => {};
}
