import React from 'react';

import { Classes } from 'jss';

import { ObjStyleSheet } from './Objects/BaseObject/Object';

type ReactElement = React.DOMElement<{ [key: string]: any }, Element>;
export type IDataContainerChild = string | IDataContainer;
export interface IDataContainer {
  name: string;
  styleName: string;
  children: IDataContainerChild[];
}

export interface IRenderContainer {
  styleSheet: Classes<string | number>;
  render: (data: IDataContainer) => ReactElement;
}

export interface IManager<T> {
  // Если data === undefined , присвоить дефолтные параметры
  update: (data?: T) => void;
  remove: () => void;
}
class Manager<T> implements IManager<T> {
  defaultData: T;
  data?: T;
  constructor(set: (data?: T | undefined) => void, defaultData: T, data?: T) {
    this.set = set;
    this.defaultData = defaultData;
    this.data = data;
  }

  private set: (data?: T) => void;
  private create = (data?: T) => {
    this.data = data || this.defaultData;
	console.log(`this.create()!!!!!!!`,this.data)
    this.set(this.data);
  };
  update = (data?: T) => {
    if (!data) {
      this.create();	 
    } else if (this.data) {
		this.data = data
		this.set(this.data);
		console.log(`this.set(data)!!!!!!!`)
    } else {
		this.create(data);	
    }
  };
  remove = () => this.set();
}

const manager = new Manager<IDataContainer>(
  (data?: IDataContainer) => console.log("data",data),
  {
    name: "Новое имя",
    styleName: "keyStyle",
    children: [],
  }
);
manager.update()

class RenderContainer implements IRenderContainer {
  styleSheet: Classes<string | number>;
  constructor(styleSheet: Classes<string | number>) {
    this.styleSheet = styleSheet;
  }
  render: (data: IDataContainer) => ReactElement = (data: IDataContainer) => {
    return React.createElement(
      "div",
      {
        className: this.styleSheet[data.styleName],
      },
      data.children.map(
        (cild) => (typeof cild !== "string" && this.render(cild)) || cild
      )
    );
  };
}

export const component = new RenderContainer(ObjStyleSheet).render({
  name: "Вася",
  styleName: "objectStyle",
  children: [
    "Привет!",
    {
      name: "Вася",
      styleName: "keyStyle",
      children: [
        "Ура!",
        {
          name: "Вася",
          styleName: "objectStyle",
          children: [
            "Привет!",
            {
              name: "Вася",
              styleName: "keyStyle",
              children: ["Приветище!"],
            },
          ],
        },
      ],
    },
    {
      name: "Вася",
      styleName: "objectStyle",
      children: [
        "Привет!",
        {
          name: "Вася",
          styleName: "keyStyle",
          children: [
            "Ура!",
            {
              name: "Вася",
              styleName: "objectStyle",
              children: [
                "Привет!",
                {
                  name: "Вася",
                  styleName: "keyStyle",
                  children: ["Приветище!"],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
