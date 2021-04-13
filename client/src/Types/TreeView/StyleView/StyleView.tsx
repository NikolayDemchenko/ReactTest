import React, { FC } from 'react';

import { TProperties } from '../TreeView';
import { styleView } from './Style';

interface IFCItem<T> {
	item: T;
	setItem(item: T): void;
	List: FC<IFCList<T>>;
}
interface IFCList<T> {
	Item: FC<IFCItem<T>>;
	list: T[];
	setList(list: T[]): void;
}

export const instanceOfIList = <T,>(object: any): object is Array<T> => {
	return object instanceof Array ? true : false;
};
type TKeyValue = [string, string|TKeyValue[]];
interface IStyleToVariablesTree {
	(obj: TProperties): TKeyValue[];
}
export const StyleToKeyValueTree: IStyleToVariablesTree = (style) => {
	const list: TKeyValue[] = [];
	Object.keys(style).forEach((name) => {
		if (style[name] instanceof Object) {
			list.push([
				name,
				StyleToKeyValueTree(style[name] as TProperties)
			]);
		} else {
			list.push([name, style[name] as string ]);
		}
	});
	// console.log(`list`, list);
	return list;
};

export const ListCreator = <T,>(
	List: FC<IFCList<T>>,
	Item: FC<IFCItem<T>>
): FC<{ list: T[]; setList(list: T[]): void }> => ({ list, setList }) => <List {...{ Item, setList, list }} />;

const List = <T,>(props: React.PropsWithChildren<IFCList<T>>) => {
	const { Item, list, setList } = props;
	return (
		<div className={styleView.listContainer}>
			{list.map((item, key) => {
				const setItem = (item: T) => setList(list.map((li, index) => (index === key ? item : li)));
				return <Item {...{ item, setItem, List, key }} />;
			})}
		</div>
	);
};

// const setPreview = (nodeId:string,value:string|number) => {
// 	document.getElementById(nodeId)!.className = jss
// 		.createStyleSheet({ className: { ...previewBase, [name]: value } })
// 		.attach().classes.className;
// };

const Item = <T,>(props: React.PropsWithChildren<IFCItem<T>>) => {
	const { item, setItem, List } = props;
	const setName = (name: string) => {
		setItem({ ...item, name });
	};
	const setValue = (value: string) => {
		setItem({ ...item, value });
	};
	return (
		<div className={styleView.nodeContainer}>
			{!instanceOfIList(Object.values(item)[1]) ? (
				<div className={styleView.propContainer}>
					<div className={styleView.propName}>
						{/* <PopupInput
							{...{
								value: Object.values(item)[0] as string,
								setValue: setName,
								setPreview: () => {},
							}}
							height="1em"
						/> */}
					</div>
					<div className={styleView.propValue}>
						{/* <PopupInput
							{...{
								value: Object.values(item)[1] as string,
								setValue: setValue,
								setPreview: () => {},
							}}
							height="1em"
						/> */}
					</div>
				</div>
			) : (
				<List {...{ Item, list: Object.values(item)[1], setList: () => {} }} />
			)}
		</div>
	);
};

export const StyleView = ListCreator(List, Item);

// Переделать структуру дерева в набор пар ключ значение - [key,value]
// Сделать обратный ковертер для стилей
// Вычленить неизменяемые элементы и сделать из них HOCs
// собрать панель навигации