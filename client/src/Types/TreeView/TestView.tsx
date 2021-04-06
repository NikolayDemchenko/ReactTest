import React, { FC } from 'react';
import { TJssStyle, TNode } from '../BaseTypes';
import jss, { JssStyle, Classes, StyleSheet } from 'jss';
import preset from 'jss-preset-default';
import { Props } from 'react';
type TObject = { [name: string]: string | number | boolean | TObject };
type TObjectArray = {
	[name: string]: string | number | boolean | TObject |TNode| TObjectArray;
}[];
type TData = { data: object };
interface IObjectToObjectArray {
	(obj: TObject): TObjectArray;
}

export const ObjToObjArray: IObjectToObjectArray = (obj: TObject) => {
	let arr: TObjectArray = [];
	Object.keys(obj).map((key: string) => {
		if (typeof obj[key] !== 'string' && typeof obj[key] !== 'number' && typeof obj[key] !== 'boolean') {
			// console.log(`obj[key]`, key, obj[key]);
			arr.push({ [key]: ObjToObjArray(obj[key] as TObject) });
		} else {
			arr.push({ [key]: obj[key] as string });
		}
	});
	//   console.log(`arr`, arr);
	return arr;
};

// Нужно в ListItem передать Item и dataList - массив объектов с свойствами типа string | number для него
const ListItemCreator = <T extends {}[]>(Item: FC<{ data: object }>, dataList: T): FC => () => (
	<>
		{dataList.map((data, key) => (
			<Item {...{ data, key }} />
		))}
	</>
);

const TreeViewCreator = (Item: FC<{ data: object }>): FC<{ dataList: TObjectArray }> => ({ dataList }) => (
	<>
		{dataList.map((data, key) => {
			const value = Object.values(data)[0];
			// console.log('value :>> ', value);
			if (value instanceof Array) {
				const TreeView = TreeViewCreator(Item);
				return (
					<Item {...{ data, key }}>
						<TreeView {...{ dataList: value }} />
					</Item>
				);
			} else {
				return <Item {...{ data, key }} />;
			}
		})}
	</>
);

const NodeCreator = (Node: FC<TData>, NodeWithChildren: FC<TData>): FC<TData> => ({ data, children }) => {
	return (
		<>
			{Object.values(data)[0] instanceof Array ? (
				<NodeWithChildren {...{ data }}>{children}</NodeWithChildren>
			) : (
				<Node {...{ data }} />
			)}
		</>
	);
};

const container = {
	display: 'grid',
	gridTemplateColumns: '60% 35% 1em',
	borderTop: '2px solid #55667766',
	background: 'rgba(30,40,57,.4)',
	color: 'rgb(140, 200, 255)',
	flexWrap: 'wrap',
	maxHeight: '95vh',
	// minWidth: '280px',
	maxWidth: '280px',
	// background: 'rgb(30,40,57)',
	// backgroundColor: '#456c',
	// boxShadow: '2px 10px 5px 2px #00000055',
	'&:hover':{	color: '#345',},
	'&::-webkit-scrollbar': { width: '4px' },
	'&::-webkit-scrollbar-thumb': { backgroundColor: '#567' },
};
const listContainer = {
	borderTop: '4px solid rgba(140, 200, 255, 0.2)',
	display: 'flex',
	// color: 'rgba(140, 200, 255, 0.8)',
	flexWrap: 'wrap',
	maxHeight: '95vh',
	// minWidth: '280px',
	maxWidth: '280px',
	background: 'rgb(30,40,57)',
	// backgroundColor: '#456c',
	// boxShadow: '2px 10px 5px 2px #00000055',
	'&::-webkit-scrollbar': { width: '4px' },
	'&::-webkit-scrollbar-thumb': { backgroundColor: '#567' },
};
const name = {
	marginLeft: '10px',
	// color: 'rgba(140, 200, 255, 0.8)',
	// backgroundColor: '#856c',
};
const value = {
	marginLeft: '10px',
	color: 'rgba(140, 200, 255, 0.8)',
	// backgroundColor: '#856c',
};

const listName = { marginLeft: '10px', color: '#856c', backgroundColor: 'rgba(140, 200, 255, 0.8)' };
const listValue = {
	// marginLeft: '10px',
	// color: '#856c',
	// backgroundColor: 'rgba(140, 200, 255, 0.8)',
};

const nodeStyles: { [name: string]: TJssStyle } = {
	container,
	name,
	value,
	listContainer,
	listName,
	listValue,
};
jss.setup(preset());
const { classes } = jss.createStyleSheet(nodeStyles).attach();

const Node: FC<{ data: object }> = ({ data }) => {
	return (
		<div className={classes.container}>
			{/* <div className={classes.name}>{Object.keys(data)}</div>
			<div className={classes.value}>{Object.values(data)}</div> */}
			<div className={classes.value}>{JSON.stringify(data)}</div>
		</div>
	);
};

const NodeWithChildren: FC<{ data: object }> = ({ data, children }) => {
	return (
		<div className={classes.listContainer}>
			<div className={classes.listName}>{Object.keys(data)}</div>
			<div className={classes.listValue}>{children}</div>
		</div>
	);
};

export const TestView = TreeViewCreator(NodeCreator(Node, NodeWithChildren));
