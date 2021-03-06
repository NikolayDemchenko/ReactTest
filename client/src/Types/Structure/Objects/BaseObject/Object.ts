import { JssStyle } from 'jss';

import { createJssStyles } from '../../CreateJssStyle';
import {
  InputWithPlaceholderProperty,
} from '../../Properties/BaseProperty/Property';
import {
  Container,
  Void,
} from './Model';

type TChild = string | IObject;
interface IChildren {
  [index: number]: TChild;
}
export interface IObject {
  type: string;
  tag: string;
  props?: {
    [key: string]: string;
  };
  children?: IChildren;
}

export interface IPage {
  objects: IObject[];
  styles: { name: string; data: JssStyle }[];
}

const page: IPage = {
  objects: [
    {
      type: "container",
      tag: "div",
      props: {
        className: "propertyStyle",
      },
      children: [
        {
          type: "container",
          tag: "span",
          props: {
            className: "keyStyle",
          },
          children: ["Полное наименование организации"],
        },
        {
          type: "void",
          tag: "input",
          props: {
            className: "valueStyle",
            placeholder: "Общество с ограниченной ответственностью «Весна»",
          },
        },
      ],
    },
    {
      type: "container",
      tag: "div",
      props: {
        className: "propertyStyle",
      },
      children: [
        {
          type: "container",
          tag: "span",
          props: {
            className: "keyStyle",
          },
          children: ["ЮРИДИЧЕСКИЙ АДРЕС"],
        },
        {
          type: "void",
          tag: "input",
          props: {
            className: "valueStyle",
            placeholder: "123456, г. Москва, ул. Подвойского, д. 14, стр. 7",
          },
        },
      ],
    },
    {
      type: "container",
      tag: "div",
      props: {
        className: "propertyStyle",
      },
      children: [
        {
          type: "container",
          tag: "span",
          props: {
            className: "keyStyle",
          },
          children: ["Почтовый адрес"],
        },
        {
          type: "void",
          tag: "input",
          props: {
            className: "valueStyle",
            placeholder: "123456, г. Москва, ул. Подвойского, д. 14, стр. 7",
          },
        },
      ],
    },
    {
      type: "container",
      tag: "div",
      props: {
        className: "propertyStyle",
      },
      children: [
        {
          type: "container",
          tag: "span",
          props: {
            className: "keyStyle",
          },
          children: ["ИНН"],
        },
        {
          type: "void",
          tag: "input",
          props: {
            className: "valueStyle",
            placeholder: "7712345678",
          },
        },
      ],
    },
  ],
  styles: [
    {
      name: "objectStyle",
      data: {
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        color: "black",
        marginLeft: "10px",
        "&:hover": { background: "#5678", color: "blue" },
      },
    },
    {
      name: "propertyStyle",
      data: {
        display: "flex",
        cursor: "pointer",
        marginLeft: "10px",
        "&:hover": { color: "#fff" },
      },
    },
    {
      name: "keyStyle",
      data: {
        cursor: "pointer",
        // marginLeft: "10px",
        color: "red",
        "&:hover": { color: "#fff" },
      },
    },
    {
      name: "valueStyle",
      data: {
        cursor: "pointer",
        marginLeft: "10px",
        color: "blue",
        "&:hover": { color: "#fff" },
      },
    },
  ],
};

export const ObjStyleSheet = createJssStyles(page.styles);

const baseObject = new Container(
  "div",
  {
    className: ObjStyleSheet["objectStyle"],
    onClick: (e: any) => {
      e.stopPropagation();
      console.log("Нажал на Objekt!!!");
    },
  },
  [
    new Container("div", { className: ObjStyleSheet["keyStyle"] }, [
      "Полное наименование организации",
      new Void("input", {
        className: ObjStyleSheet["valueStyle"],
        placeholder: "Общество с ограниченной ответственностью «Весна»",
      }).render(),
    ]).render(),
    InputWithPlaceholderProperty(
      "ЮРИДИЧЕСКИЙ АДРЕС",
      "123456, г. Москва, ул. Подвойского, д. 14, стр. 7"
    ),
    InputWithPlaceholderProperty(
      "Почтовый адрес",
      "123456, г. Москва, ул. Подвойского, д. 14, стр. 7"
    ),
    InputWithPlaceholderProperty("ИНН", "7712345678"),
  ]
).render();

export { baseObject };