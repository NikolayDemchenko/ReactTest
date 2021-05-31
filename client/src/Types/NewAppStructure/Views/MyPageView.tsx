import React, { FC } from 'react';

import { MyPageType } from '../Model/ValuesInterfacesAndTypes';
import { MyElementView } from './MyElementView';
import { IPageView } from './ViewsInterfacesAndTypes';

// export class PageView implements IPageView {
// 	private page: MyPageType;
// 	constructor(page: MyPageType) {
// 		this.page = page;
// 	}
// 	returnReactElement = () => {
// 		const {properties,children}=this.page
// 		return	new MyElementView({ type:"div",  properties }).returnReactElement(children);
// 	};
// }
export const PageView:FC<{page: MyPageType}>=({page})=>{
	const {properties,children}=page
	return new MyElementView({ type:"div",  properties }).returnReactElement(children)
}