import { IMyContainer, MyChildrenType, MyContainerType, MyElementType } from './ValuesInterfacesAndTypes';
// Пока не понятна необходимость наличия данного класса
export class MyContainer implements IMyContainer {
	private container: MyContainerType;

	constructor(container: MyContainerType) {
		this.container = container;
	}
	value = () => this.container;
}
