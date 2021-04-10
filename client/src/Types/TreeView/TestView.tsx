import React, { FC } from 'react';

import { TNode } from '../BaseTypes';
import { classes } from './TestViewStyle';

type TObject = { [name: string]: string | number | boolean | null | TObject };
interface IPageNodesToTreeNodeArray {
	(pageNodes: TNode[]): IItem[];
}
interface IStyleToTreeNodeArray {
	(obj: TObject): IItem[];
}
interface IList {
	properties?: TObject;
	items: IItem[];
}
interface IItem {
	properties: TObject;
	listItems?: IList;
}

export const StyleToTreeNodes: IStyleToTreeNodeArray = (style) => {
	const list: IItem[] = [];
	Object.keys(style).forEach((name) => {
		if (typeof style[name] !== 'string' && typeof style[name] !== 'number' && typeof style[name] !== 'boolean') {
			list.push({
				properties: {},
				listItems: { items: StyleToTreeNodes(style[name] as TObject), properties: { name } },
			});
		} else {
			list.push({ properties: { [name]: style[name] } });
		}
	});
	// console.log(`list`, list);
	return list;
};

export const PageNodesToTreeNodes: IPageNodesToTreeNodeArray = (pageNodes) => {
	const getTree = (pageNodes: TNode[], parentId: string | null) => {
		const list: IItem[]=[];
		pageNodes.forEach((node) => {
			if (node.parentId === parentId) {			
				const items = getTree(
					pageNodes.filter((node) => node.parentId !== parentId),
					node.id
				);
				const listItems = items.length!==0 ? { items } : undefined;
				list.push({properties: node,	listItems});				
			}
		});
		// console.log(`list`, list);
		return list;
	};
	// console.log(`arr`, arr);
	return getTree(pageNodes, null);
};


const TreeViewCreator = (
	List: FC<{ properties?: TObject }>,
	properties: TObject | undefined,
	Item: FC<IItem>
): FC<{ list: IItem[] }> => ({ list }) => (
	<List {...{ properties }}>
		{list.map(({ properties, listItems }, key) => {	
			return (
				<Item {...{ properties, key }}>		
					{listItems && TreeViewCreator(List, listItems.properties, Item)({ list: listItems.items })}
				</Item>
			);
		})}
	</List>
);


const List: FC<{ properties?: TObject }> = ({ children, properties }) => {
	return (		
			<div className={classes.listContainer}>
				<div className={classes.listTitle}>{properties && properties.name}</div>
				{children}
			</div>		
	);
};

const Item: FC<IItem> = ({ properties, children }) => {
	return (
		<div className={classes.nodeContainer}>
			{Object.keys(properties).map((name, index) => (
					<div className={classes.propContainer} key={index}>
						<div className={classes.propName}>{name}</div>
						<div className={classes.propValue}>{properties[name]}</div>
					</div>
				))}
			{children}
		</div>
	);
};

export const TestView = TreeViewCreator(List, { name: 'Список' }, Item);
