import { createElement, FC } from 'react';

import { IMyElement, MyElementType, MyNodesType } from './ValuesInterfacesAndTypes';

const instanceOf = (object: any): object is IMyElement => 'view' in object;

export class MyElement implements IMyElement {
	private element: MyElementType;

	constructor(element: MyElementType) {
		this.element = element;
		console.log(`this.element.nodes`, this.element.nodes);
	}
	//   updateElement(element: MyElementType) {
	//     this.element = element;
	//     return this;
	//   }
	withNodes(nodes: MyNodesType) {
		this.element.nodes = nodes;
		return this;
	}
	value = (): MyElementType =>
		this.element.nodes
			? {
					id: this.element.id,
					type: this.element.type,
					properties: this.element.properties,
					nodes: this.element.nodes,
			  }
			: {
					id: this.element.id,
					type: this.element.type,
					properties: this.element.properties,
			  };


	view: FC = () => {
		console.log(`this.element.nodes`, this.element.nodes);
		const props = this.element.properties;
		// const key = this.element.id;
		const id = this.element.id;
		const type = this.element.type;
		const nodes = this.element.nodes;
		if (nodes) {
			console.log(`withNodes`);
			return createElement(
			type,{ ...props, id },
			nodes.map((node) => (typeof node === 'string' ? node : node.view({})))
			);
		} else {
			console.log(`withOutNodes`);
			return createElement(type, { ...props, id });
		}
	};
}
