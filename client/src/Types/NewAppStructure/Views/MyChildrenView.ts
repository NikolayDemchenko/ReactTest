import { MyChildsType } from '../Model/ValuesInterfacesAndTypes';
import { ElementView } from './MyElementView';

export const MyChildrenView = (childs: MyChildsType) => {
	console.log(`childs`, childs);
	return childs.map((element) =>
		typeof element === 'string'
			? element
			: (element.childs &&
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
