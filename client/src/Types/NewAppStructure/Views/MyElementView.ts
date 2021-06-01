import { createElement, FC } from 'react';
import { MyChildsType, MyElementType } from '../Model/ValuesInterfacesAndTypes';
import { MyChildrenView } from './MyChildrenView';

export const ElementView:FC<{element: MyElementType, childs?: MyChildsType}>=({element, childs})=>{
	
	console.log(`childs`, childs)
	if (childs) {
		console.log(`withChilds`)
		return createElement(
			element.type,
			element.properties,
			MyChildrenView(childs))
		} else {
			console.log(`withOutChilds`)			
			return createElement(element.type, element.properties);
		}
	};
