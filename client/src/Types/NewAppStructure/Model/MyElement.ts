import { IMyElement, IMyProperties, MyElementType } from './ValuesInterfacesAndTypes';

export class MyElement implements IMyElement {
	private element: MyElementType
	constructor(element: MyElementType) {
		this.element = element;		
	}
	updateType(type: string): void {
		this.element.type = type;
	}
	value = () =>this.element;
}
