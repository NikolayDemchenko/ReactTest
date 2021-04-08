import React, { FC } from 'react';

import jss from 'jss';
import preset from 'jss-preset-default';

import { TJssStyle, TNode } from '../BaseTypes';

type TObject = { [name: string]: string | number | boolean | null | TObject };

interface IPageNodesToTreeNodeArray {
	(pageNodes: TNode[]): TListTreeNode;
}
interface IStyleToTreeNodeArray {
	(obj: TObject): TListTreeNode;
}
type TListTreeNode = {
	properties?: TObject;
	items: TTreeNode[];
};
type TTreeNode = {
	properties?: TObject;
	nodes?: TListTreeNode;
};

export const StyleToTreeNodes: IStyleToTreeNodeArray = (style) => {
	const list: TListTreeNode = { items: [] };
	Object.keys(style).forEach((name) => {
		if (typeof style[name] !== 'string' && typeof style[name] !== 'number' && typeof style[name] !== 'boolean') {
			// console.log(`obj[key]`, key, obj[key]);
			list.items.push({ properties: { name }, nodes: StyleToTreeNodes(style[name] as TObject) });
		} else {
			list.items.push({ properties: { [name]: style[name] as string } });
		}
	});
	console.log(`list`, list);
	return list;
};

export const PageNodesToTreeNodes: IPageNodesToTreeNodeArray = (pageNodes) => {
	const getTree = (pageNodes: TNode[], parentId: string | null) => {
		const list: TListTreeNode = { items: [] };
		pageNodes.forEach((node) => {
			if (node.parentId === parentId) {
				list.items.push({
					properties: node,
					nodes: getTree(
						pageNodes.filter((node) => node.parentId !== parentId),
						node.id
					),
				});
			}
		});
		return list;
	};
	// console.log(`arr`, arr);
	return getTree(pageNodes, null);
};

const TreeViewCreator = (List: FC<{ properties?: TObject }>, Item: FC<TTreeNode>): FC<{ list: TListTreeNode }> => ({
	list,
}) => (
	<List {...{ properties: list.properties }}>
		{list.items.map(({ properties, nodes }, key) => {
			const TreeView = TreeViewCreator(List, Item);
			return <Item {...{ properties, nodes, key }}>{nodes && <TreeView {...{ list: nodes }} />}</Item>;
		})}
	</List>
);

const List: FC<{ properties?: TObject }> = ({ children, properties }) => {
	return (
		<>
			<div className={classes.listContainer}>
				{/* <div>{JSON.stringify(properties)}{"Хуй!"}</div> */}
				{children}
			</div>
		</>
	);
};

const treeNodeContainer = {
	overflow: 'hidden',
	// borderTop: '4px solid rgba(140, 200, 255)',
	// background: 'rgb(30,40,57)',
	color: '#8CC8FF',
	maxWidth: '280px',
	
	'&::-webkit-scrollbar': { width: '4px' },
	'&::-webkit-scrollbar-thumb': { backgroundColor: '#567' },
};
const nodeContainer = {
	display: 'grid',
	gridTemplateColumns: '60% 35% 1em',
	borderTop: '2px solid #55667766',
	// background: 'rgb(40,50,67)',
	color: '#8CC8FF',
	height: '1.2em',
	'&:hover': { color: '#345' },
};
const listContainer = {
	borderTop: '4px solid rgba(140, 200, 255)',
	// borderBottom: '4px solid rgba(140, 200, 255)',
	overflow: 'hidden',
	marginTop: '10px',
	// display: 'flex',
	// color: 'rgb(140, 200, 255)',
	// flexWrap: 'wrap',
	boxShadow: '2px 10px 5px 2px #00000055',
	maxWidth: '280px',
	background: 'rgb(70,40,57)',
	// '&::-webkit-scrollbar': { width: '4px' },
	// '&::-webkit-scrollbar-thumb': { backgroundColor: '#567' },
};
const nodePropName = {
	marginLeft: '10px',
	// color: 'rgba(140, 200, 255, 0.8)',
	// backgroundColor: '#856c',
};
const nodePropValue = {
	marginLeft: '10px',
	// color: 'rgba(140, 200, 255, 0.8)',
	// backgroundColor: '#856c',
};

const listTitle = {
	marginLeft: '10px',
	color: '#888c',
	// backgroundColor: 'rgba(140, 200, 255, 0.8)',
};
const nodeStyles: { [name: string]: TJssStyle } = {
	treeNodeContainer,
	nodeContainer,
	nodePropName,
	nodePropValue,
	listContainer,
	childsTitle: listTitle,
};
jss.setup(preset());
const { classes } = jss.createStyleSheet(nodeStyles).attach();

// const TreeNode: FC<TTreeNode> = ({ properties, childsTitle, childs, children }) => {
// 	return (
// 		<div className={classes.treeNodeContainer}>
// 			{properties &&
// 				Object.keys(properties).map((name, index) => (
// 					<div className={classes.nodeContainer} key={index}>
// 						<div className={classes.nodePropName}>{name}</div>
// 						<div className={classes.nodePropValue}>{properties[name]}</div>
// 					</div>
// 				))}
// 			{childs && (
// 				<div className={classes.listContainer}>
// 					<div>{childsTitle && <div className={classes.listTitle}>{childsTitle}</div>}{children}</div>
// 				</div>
// 			)}
// 			{/* <div className={classes.value}>{JSON.stringify(data)}</div> */}
// 		</div>
// 	);
// };
const TreeNode: FC<TTreeNode> = ({ properties, nodes, children }) => {
	return (
		<div className={classes.treeNodeContainer}>
			{properties &&
				Object.keys(properties).map((name, index) => (
					<div className={classes.nodeContainer} key={index}>
						<div className={classes.nodePropName}>{name}</div>
						<div className={classes.nodePropValue}>{properties[name]}</div>
					</div>
				))}
			{nodes && children}
			{/* <div className={classes.value}>{JSON.stringify(data)}</div> */}
		</div>
	);
};

export const TestView = TreeViewCreator(List, TreeNode);
