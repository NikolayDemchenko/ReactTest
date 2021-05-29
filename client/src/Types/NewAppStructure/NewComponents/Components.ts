import ReactDOM from 'react-dom';

import { BaseComponent } from './BaseComponent';
import {
  Children,
  ChildrenType,
  ChildType,
} from './Children';
import { Properties } from './Properties';

export class ComponentPage {
  private component: ComponentContainer;

  constructor(component: ComponentContainer) {
    this.component = component;
  }
  add(child: ChildType): void {
    this.component.add(child);
  }
  removeByIndex(index: number): void {
    this.component.removeByIndex(index);
  }
  updateByIndex(index: number, child: ChildType): void {
    this.component.updateByIndex(index, child);
  }
  render = () => {
    ReactDOM.render(this.component.render(), document.getElementById("page"));
  };
}

export class ComponentContainer {
  private component: BaseComponent;
  private children: Children;

  constructor(component: BaseComponent, children: Children) {
    this.component = component;
    this.children = children;
  }
  add(child: ChildType): void {
    this.children.add(child);
  }
  removeByIndex(index: number): void {
    this.children.removeByIndex(index);
  }
  updateByIndex(index: number, child: ChildType): void {
    this.children.updateByIndex(index, child);
  }

  render = (): React.ReactElement => {
    return this.component.render(this.children);
  };
}

const children: ChildrenType = [
  "Текст в массиве",
  { type: "p", children: ["Некий текст"] },
  {
    type: "p",
    props: { style: { color: "red" } },
    children: ["Красный текст"],
  },
];
// const div = new Children([
// 	'Текст в массиве',
// 	{ type: 'p', children: ['Некий текст'] },
// 	{ type: 'p', props: { style: { color: 'red' } }, children: ['Красный текст'] },
// ]);

const myPage = new ComponentPage(
  new ComponentContainer(
    new BaseComponent(
      "div",
      new Properties({ style: { background: "#4587" } })
    ),
    new Children(children)
  )
);

myPage.add("Добавленный child");
myPage.add({
  type: "p",
  props: { style: { color: "red" } },
  children: ["Красный текст"],
});
myPage.add({
  type: "input",
  props: { style: { color: "red" }, placeholder: "Введите красный текст" },
});
myPage.add({
  type: "button",
  props: { style: { color: "red" }, title: "Введите красный текст" },
  children: [
    "Нажми сюда!",
    {
      type: "p",
      props: { onClick:()=>console.log(`Клик!!!`),style: { background: "black", color: "white" } },
      children: [" текст"],
    },
  ],
});
// myPage.removeByIndex(3);
myPage.updateByIndex(2, {
  type: "span",
  props: { style: { color: "blue" } },
  children: ["Обновлённый Красный текст"],
});

export { myPage };
// export const MyComopnent = div.render();
