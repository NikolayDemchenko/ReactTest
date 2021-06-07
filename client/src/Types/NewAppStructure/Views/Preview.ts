import { FC } from 'react';

import { Input } from '../Model/Input';
import { MyElement } from '../Model/MyElement';

export const PreviewComponent: FC = () => {
  const spanEl = new MyElement({ id: "1", type: "span", properties: {} });

  const inputEl = new MyElement({
    id: "2",
    type: "input",
    properties: { style: { width: "300px" } },
  });

  const flexContainerEl = new MyElement({
    id: "3",
    type: "div",
    properties: { style: { display: "flex" } },
  });
  const buttonEl = new MyElement({
    id: "4",
    type: "button",
    properties: {},
  }).withNodes(["Нажать!"]);

  const formInput = new Input(flexContainerEl, spanEl, inputEl);

  const form = new MyElement({
    id: "5",
    type: "div",
    properties: {},
  }).withNodes([
    formInput.name("Наименование организации").element().value(),
    formInput.name("Адрес").element().value(),
    buttonEl.value(),
  ]);

  const page = new MyElement({
    id: "6",
    type: "div",
    properties: { style: { background: "#789" } },
  }).withNodes([form.value()]);

  // const [page, setPage] = useState<MyElement>(pageObj5);

  return page.view({});
};
