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
	//   value = (): MyElementType =>
	//     this.element.nodes
	//       ? {
	//           id: this.element.id,
	//           type: this.element.type,
	//           properties: this.element.properties,
	//           nodes: this.element.nodes,
	//         }
	//       : {
	//           id: this.element.id,
	//           type: this.element.type,
	//           properties: this.element.properties,
	//         };

	view: FC = () => {
		console.log(`this.element.nodes`, this.element.nodes);
		if (this.element.nodes) {
			console.log(`withNodes`);
			return createElement(
				this.element.type,
				{ ...this.element.properties, key: this.element.id, id: this.element.id },
				this.element.nodes.map((node) => (typeof node === 'string' ? node : node.view({})))
			);
		} else {
			console.log(`withOutNodes`);
			return createElement(this.element.type, {
				...this.element.properties,
				key: this.element.id,
				id: this.element.id,
			});
		}
	};
}
