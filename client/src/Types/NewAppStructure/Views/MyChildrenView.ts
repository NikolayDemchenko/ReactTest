import { MyChildrenType, MyContainerType } from '../Model/ValuesInterfacesAndTypes';
import { IMyChildrenView } from './ViewsInterfacesAndTypes';
import { MyElementView } from './MyElementView';

function instanceOf(object: any): object is MyContainerType {
	return 'children' in object;
}
export class MyChildrenView implements IMyChildrenView {
	private children: MyChildrenType;
	constructor(children: MyChildrenType) {
		this.children = children;
	}

	returnReactElements = () => {
		return this.children.map((element) =>
			typeof element === 'string'
				? element
				: (instanceOf(element) &&
						new MyElementView({
							type: element.type,
							properties: element.properties || {}
						}).returnReactElement(element.children)) ||
				  new MyElementView({
						type: element.type,
						properties: element.properties || {},
				  }).returnReactElement()
		);
	};
}
