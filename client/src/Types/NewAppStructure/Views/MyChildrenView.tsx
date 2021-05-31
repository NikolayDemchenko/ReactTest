import { MyChildrenType, MyContainerType } from '../Model/ValuesInterfacesAndTypes';
import { IMyChildrenView } from './ViewsInterfacesAndTypes';
import { ElementView } from './MyElementView';
import { FC } from 'react';
import React from 'react';

function instanceOf(object: any): object is MyContainerType {
	return 'children' in object;
}
// export class MyChildrenView implements IMyChildrenView {
// 	private children: MyChildrenType;
// 	constructor(children: MyChildrenType) {
// 		this.children = children;
// 	}

// 	returnReactElements = () => {
// 		return this.children.map((element) =>
// 			typeof element === 'string'
// 				? element
// 				: (instanceOf(element) &&
// 						ElementView({element:{
// 							type: element.type,
// 							properties: element.properties || {}
// 						},children:element.children})) ||
// 				  ElementView({element:{
// 						type: element.type,
// 						properties: element.properties || {},
// 				  }})
// 		);
// 	};
// }

// export const MyChildrenView: FC<{ childs: MyChildrenType }> = ({ childs }) => {
// 	return childs.map((element) =>
// 		typeof element === 'string'
// 			? element
// 			: (instanceOf(element) &&
// 					ElementView({
// 						element: {
// 							type: element.type,
// 							properties: element.properties || {},
// 						},
// 						children: element.children,
// 					})) ||
// 			  ElementView({
// 					element: {
// 						type: element.type,
// 						properties: element.properties || {},
// 					},
// 			  })
// 	);
// };

export const MyChildrenView: FC<{ childs: MyChildrenType }> = ({ childs }) => {
	return (
		<div>
			{childs.map((element) =>
				typeof element === 'string'
					? element
					: (instanceOf(element) &&
							ElementView({
								element: {
									type: element.type,
									properties: element.properties || {},
								},
								children: element.children,
							})) ||
					  ElementView({
							element: {
								type: element.type,
								properties: element.properties || {},
							},
					  })
			)}
			;
		</div>
	);
};
