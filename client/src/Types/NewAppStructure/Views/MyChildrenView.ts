import { MyChildsType, MyElementWithChildsType } from '../Model/ValuesInterfacesAndTypes';
import { ElementView } from './MyElementView';

const instanceOf=(object: any): object is MyElementWithChildsType => 'childs' in object;

export const MyChildrenView = (childs: MyChildsType) => {
	console.log(`childs`, childs);
	return childs.map((element) =>
		typeof element === 'string'
			? element
			: (instanceOf(element) &&
					ElementView({
						element: {
							type: element.type,
							properties: element.properties || {},
						},
						childs: element.childs,
					})) ||
			  ElementView({
					element: {
						type: element.type,
						properties: element.properties || {},
					},
			  })
	);
};
