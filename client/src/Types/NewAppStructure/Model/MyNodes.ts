import {IMyNodes, MyNodesType, MyNodeType } from './ValuesInterfacesAndTypes';


export class MyNodes implements IMyNodes{
	private nodes: MyNodesType;
	constructor(nodes: MyNodesType) {
		this.nodes = nodes;
	}
	add(child: MyNodeType): void {
		this.nodes.push(child);
	}
	remove(child: MyNodeType): void {
		this.nodes = this.nodes.filter((_child) => JSON.stringify(_child) !== JSON.stringify(child));
	}
	removeByIndex(index: number): void {
		if (index > -1 && this.nodes.length > 0) {
			this.nodes.splice(index, 1);
		}
	}
	updateByIndex(index: number, child: MyNodeType): void {
		if (index > -1 && this.nodes.length > 0) {
			this.nodes = this.nodes.map((_child, _index) => {
				if (_index === index) {
					return child;
				} else {
					return _child;
				}
			});
		}
	}
	value = () => this.nodes;
}
