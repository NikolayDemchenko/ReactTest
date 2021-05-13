import React from 'react';
import { Classes } from 'jss';
import { ObjStyleSheet } from './Objects/BaseObject/Object';
export type IDataContainerChild = string | IDataContainer;
export interface IDataContainer {
	name: string;
	styleName: string;
	children: IDataContainerChild[] | [];
}

export interface IRenderContainer {
	styleSheet: Classes<string | number>;
	render: (data: IDataContainer) => React.DOMElement<{ [key: string]: any }, Element>;
}
class RenderContainer implements IRenderContainer {
	styleSheet: Classes<string | number>;
  constructor(styleSheet: Classes<string | number>) {   
    this.styleSheet=styleSheet
  }
	render: (data: IDataContainer) => React.DOMElement<{ [key: string]: any }, Element> = (data: IDataContainer) => {
		return React.createElement('div', { className: this.styleSheet[data.styleName] }, data.children);
	};
}

const container =new RenderContainer(ObjStyleSheet)
export const component=container.render({name:"Вася",styleName:"objectStyle",children:["Приветики"]})