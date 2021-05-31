import React, { createElement } from 'react';
import { MyChildrenType, MyElementType } from '../Model/ValuesInterfacesAndTypes';
import { IMyElementView } from './ViewsInterfacesAndTypes';
import { MyChildrenView } from './MyChildrenView';

export class MyElementView implements IMyElementView {
	private element: MyElementType;
	constructor(element: MyElementType) {
		this.element = element;
	}
	returnReactElement = (children?: MyChildrenType): React.ReactElement => {
		if (children) {
			return createElement(
				this.element.type,
				this.element.properties,
				new MyChildrenView(children).returnReactElements()
			);
		} else {
			return createElement(this.element.type, this.element.properties);
		}
	};
}
