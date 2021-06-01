import  { FC } from 'react';
import { MyPageType } from '../Model/ValuesInterfacesAndTypes';
import { ElementView } from './MyElementView';

export const PageView: FC<{ page: MyPageType }> = ({ page }) => {
	const { properties, childs } = page;
	return ElementView({ element: { type: 'div', properties }, childs });
};