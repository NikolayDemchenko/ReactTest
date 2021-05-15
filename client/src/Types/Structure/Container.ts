import React from 'react';

import { Classes } from 'jss';

import { ObjStyleSheet } from './Objects/BaseObject/Object';
import { SetManager } from './SetManager';
import { SwitchElement } from './SwitchElements';
import { IText } from './Text';

export type ReactElement = React.DOMElement<{ [key: string]: any }, Element>;
export type IDataContainerElement = IText | IDataContainer;
export interface IData {
  type: string;
  name: string;
  styleName: string;
}
export interface IDataContainer extends IData {
  elements: IDataContainerElement[];
}

export interface IRender<T> {
  styleSheet: Classes<string | number>;
  render: (data: T) => ReactElement;
}

const setContainer = new SetManager<IDataContainer>(
  (data?: IDataContainer) => console.log("set", data),
  {
    type: "container",
    name: "Новое имя",
    styleName: "keyStyle",
    elements: [],
  }
);
setContainer.update();
setContainer.remove();
setContainer.update({
  type: "container",
  name: "Новое имя2",
  styleName: "valueStyle",
  elements: [],
});

export class RenderContainer implements IRender<IDataContainer> {
  styleSheet: Classes<string | number>;

  constructor(styleSheet: Classes<string | number>) {
    this.styleSheet = styleSheet;
  }

  render: (data: IDataContainer) => ReactElement = (data: IDataContainer) => {
    return React.createElement(
      "div",
      {
        key: data.name,
        className: this.styleSheet[data.styleName],
        onClick: (e: any) => {
          e.stopPropagation();
          console.log(`data.name`, data.name);
        },
      },

      data.elements.map((element, index) =>
        SwitchElement(element, this.styleSheet)
      )
    );
  };
}

export const component = new RenderContainer(ObjStyleSheet).render({
  type: "container",
  name: "Контейнер1",
  styleName: "objectStyle",
  elements: [
    {
      type: "text",
      name: "Текст1",
      styleName: "objectStyle",
      value: "Привет!",
    },
    {
      type: "container",
      name: "Контейнер2",
      styleName: "keyStyle",
      elements: [
        {
          type: "text",
          name: "Текст2",
          styleName: "objectStyle",
          value: "Ура!",
        },
        {
          type: "container",
          name: "Контейнер3",
          styleName: "objectStyle",
          elements: [
            {
              type: "text",
              name: "Текст3",
              styleName: "keyStyle",
              value: "Привет!",
            },
            {
              type: "container",
              name: "Контейнер4",
              styleName: "keyStyle",
              elements: [
                {
                  type: "text",
                  name: "Текст4",
                  styleName: "keyStyle",
                  value: "Приветище!",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "container",
      name: "Контейнер5",
      styleName: "objectStyle",
      elements: [
        {
          type: "text",
          name: "Текст5",
          styleName: "keyStyle",
          value: "Привет!",
        },
        {
          type: "container",
          name: "Контейнер6",
          styleName: "keyStyle",
          elements: [
            {
              type: "text",
              name: "Текст6",
              styleName: "objectStyle",
              value: "Ура!",
            },
            {
              type: "container",
              name: "Контейнер7",
              styleName: "objectStyle",
              elements: [
                {
                  type: "text",
                  name: "Текст7",
                  styleName: "keyStyle",
                  value: "Привет!",
                },
                {
                  type: "container",
                  name: "Контейнер8",
                  styleName: "keyStyle",
                  elements: [
                    {
                      type: "text",
                      name: "Текст8",
                      styleName: "objectStyle",
                      value: "Приветище!",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
