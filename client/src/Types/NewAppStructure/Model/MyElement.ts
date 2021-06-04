import { IMyElement, MyElementType, MyNodesType } from './ValuesInterfacesAndTypes';
import { createElement, FC } from 'react';
export class MyElement implements IMyElement {
	private element: MyElementType;
	constructor(element: MyElementType, nodes?: MyNodesType) {
		this.element = element;
		this.element.nodes = element.nodes || nodes;
		console.log(`element.nodes||nodes`, element.nodes || nodes);
		console.log(`this.element.nodes`, this.element.nodes);
	}
	updateType(type: string): void {
		this.element.type = type;
	}
	value = () =>
		this.element.nodes
			? { type: this.element.type, properties: this.element.properties, nodes: this.element.nodes }
			: { type: this.element.type, properties: this.element.properties };

	view: FC = () => {
		console.log(`this.element.nodes`, this.element.nodes);
		if (this.element.nodes) {
			console.log(`withNodes`);
			return createElement(this.element.type, this.element.properties, this.nodesView(this.element.nodes));
		} else {
			console.log(`withOutNodes`);
			return createElement(this.element.type, this.element.properties);
		}
	};
	private nodesView = (childs: MyNodesType) => {
		console.log(`childs`, childs);
		return childs.map((element) =>
			typeof element === 'string'
				? element
				: (element.nodes &&
						new MyElement(
							{
								type: element.type,
								properties: element.properties || {},
							},
							element.nodes
						).view({})) ||
				  new MyElement({
						type: element.type,
						properties: element.properties || {},
				  }).view({})
		);
	};
}
