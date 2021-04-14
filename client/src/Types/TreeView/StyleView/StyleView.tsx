import React, { FC } from 'react';
import PopupInput from '../../../Components/Control/Inputs/ModalInput/PopupInput/PopupInput';
import { IVariable, TProperties } from '../TreeView';
import { styleView } from './Style';

interface IFCItem {
	item: TKeyValue;
	setItem(item: TKeyValue): void;
	List: FC<IFCList>;
}
interface IFCList {
	Item: FC<IFCItem>;
	list: TKeyValue[];
	setList(list: TKeyValue[]): void;
}

export const instanceOfIList = (object: any): object is Array<TKeyValue> => {
	return object instanceof Array ? true : false;
};

type TKeyValue = [string, string | Array<TKeyValue>];

interface IStyleToVariablesTree {
	(obj: TProperties): TKeyValue[];
}
export const StyleToKeyValueTree: IStyleToVariablesTree = (style) => {
	const list: TKeyValue[] = [];
	Object.keys(style).forEach((name) => {
		if (style[name] instanceof Object) {
			list.push([name, StyleToKeyValueTree(style[name] as TProperties)]);
		} else {
			list.push([name, style[name] as string]);
		}
	});
	console.log(`list`, list);
	return list;
};

// interface IStyleToVariablesTree {
// 	(obj: TProperties): IVariable[];
// }
// export const StyleToKeyValueTree: IStyleToVariablesTree = (style) => {
// 	const list: IVariable[] = [];
// 	Object.keys(style).forEach((name) => {
// 		if (style[name] instanceof Object) {
// 			list.push({
// 				name,
// 				value: StyleToKeyValueTree(style[name] as TProperties),
// 			});
// 		} else {
// 			list.push({ name, value: style[name] });
// 		}
// 	});
// 	// console.log(`list`, list);
// 	return list;
// };

export const ListCreator = (
	List: FC<IFCList>,
	Item: FC<IFCItem>
): FC<{ list: TKeyValue[]; setList(list: TKeyValue[]): void }> => ({ list, setList }) => (
	<List {...{ Item, setList, list }} />
);

const List = (props: React.PropsWithChildren<IFCList>) => {
	const { Item, list, setList } = props;
	return (
		<div className={styleView.listContainer}>
			{list.map((item, key) => {
				const setItem = (item: TKeyValue) => setList(list.map((li, index) => (index === key ? item : li)));
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

const Item = (props: React.PropsWithChildren<IFCItem>) => {
	const { item, setItem, List } = props;
	const setName = (name: string) => {
		setItem([name, item[1]]);
	};
	const setValue = (value: string) => {
		setItem([item[0], value]);
	};
	return (
		<div className={styleView.nodeContainer}>
			{!instanceOfIList(Object.values(item)[1]) ? (
				<div className={styleView.propContainer}>
					<div className={styleView.propName}>
						<PopupInput
							{...{
								value: Object.values(item)[0] as string,
								setValue: setName,
								setPreview: () => {},
							}}
							height="1em"
						/>
					</div>
					<div className={styleView.propValue}>
						<PopupInput
							{...{
								value: Object.values(item)[1] as string,
								setValue: setValue,
								setPreview: () => {},
							}}
							height="1em"
						/>
					</div>
				</div>
			) : (
				<List {...{ Item, list: item[1] as TKeyValue[], setList: () => {} }} />
			)}
		</div>
	);
};

export const StyleView = ListCreator(List, Item);

// Переделать структуру дерева в итерируемый объект
// Сделать обратный ковертер для стилей
// Вычленить неизменяемые элементы и сделать из них HOCs
// собрать панель навигации