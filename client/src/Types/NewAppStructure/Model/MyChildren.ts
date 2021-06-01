import { IMyChildren, MyChildsType, MyChildType } from './ValuesInterfacesAndTypes';

export class MyChildren implements IMyChildren{
	private children: MyChildsType;
	constructor(children: MyChildsType) {
		this.children = children;
	}
	add(child: MyChildType): void {
		this.children.push(child);
	}
	remove(child: MyChildType): void {
		this.children = this.children.filter((_child) => JSON.stringify(_child) !== JSON.stringify(child));
	}
	removeByIndex(index: number): void {
		if (index > -1 && this.children.length > 0) {
			this.children.splice(index, 1);
		}
	}
	updateByIndex(index: number, child: MyChildType): void {
		if (index > -1 && this.children.length > 0) {
			this.children = this.children.map((_child, _index) => {
				if (_index === index) {
					return child;
				} else {
					return _child;
				}
			});
		}
	}
	value = () => this.children;
}
