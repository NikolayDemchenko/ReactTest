import { MyContainerType } from '../Model/ValuesInterfacesAndTypes';
import { MyElementView } from './MyElementView';
import { IContainerView } from './ViewsInterfacesAndTypes';
// Пока не понятна необходимость наличия данного класса
export class MyContainerView implements IContainerView {
	private container: MyContainerType;
	constructor(container: MyContainerType) {
		this.container = container;
	}
	returnReactElement = () =>
		new MyElementView({ type: this.container.type, properties: this.container.properties }).returnReactElement(
			this.container.children
		);
}
