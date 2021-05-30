import ReactDOM from 'react-dom';

import {
  Children,
  ChildrenView,
} from './Children';
import {
  Element,
  ElementView,
} from './Element';
import { Properties } from './Properties';

export class PageView {
  private elementView: ElementView;
  private children: ChildrenView;

  constructor(elementView: ElementView, children: ChildrenView) {
    this.elementView = elementView;
    this.children = children;
  }
  render = () => {
    ReactDOM.render(
      this.elementView.render(this.children),
      document.getElementById("page")
    );
  };
}


const pageChildren = new Children([
  "Текст в массиве",
  { type: "p", children: ["Некий текст"] },
  {
    type: "p",
    props: { style: { color: "red" } },
    children: ["Красный текст"],
  },
]);

const myPage = new PageView(
  new ElementView(
    new Element("div", new Properties({ style: { background: "#4587" } }))
  ),
  new ChildrenView(pageChildren)
);

pageChildren.add("Добавленный child");
pageChildren.add({
  type: "p",
  props: { style: { color: "red" } },
  children: ["Красный текст"],
});
pageChildren.add({
  type: "input",
  props: { style: { color: "red" }, placeholder: "Введите красный текст" },
});
pageChildren.add({
  type: "button",
  props: { style: { color: "red" }, title: "Введите красный текст" },
  children: [
    "Нажми сюда!",
    {
      type: "p",
      props: {
        onClick: () => console.log(`Клик!!!`),
        style: { background: "black", color: "white" },
      },
      children: [" текст"],
    },
  ],
});
// myPage.removeByIndex(3);
pageChildren.updateByIndex(2, {
  type: "span",
  props: { style: { color: "blue" } },
  children: ["Обновлённый Красный текст"],
});

export { myPage };