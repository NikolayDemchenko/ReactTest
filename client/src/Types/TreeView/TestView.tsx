import React, { FC } from 'react';
import { TJssStyle, TNode, IViewNode } from '../BaseTypes';
import jss, { JssStyle, Classes, StyleSheet } from 'jss';
import preset from 'jss-preset-default';
import { page } from '../../Components/View/Pages/CreateApp';

type TObject = { [name: string]: string | number | boolean | null | TObject };

interface IPageNodesToTreeNodeArray {
	(pageNodes: TNode[]): TTreeNode[];
}
interface IStyleToTreeNodeArray {
	(obj: TObject): TTreeNode[];
}
type TTreeNode = { properties?: TObject; childsTitle?: string; childs?: TTreeNode[] };

export const StyleToTreeNodes: IStyleToTreeNodeArray = (style) => {
	const arr: TTreeNode[] = [];
	Object.keys(style).forEach((name) => {
		if (typeof style[name] !== 'string' && typeof style[name] !== 'number' && typeof style[name] !== 'boolean') {
			// console.log(`obj[key]`, key, obj[key]);
			arr.push({ childsTitle: name, childs: StyleToTreeNodes(style[name] as TObject) });
		} else {
			arr.push({ properties: { [name]: style[name] as string } });
		}
	});
	// console.log(`arr`, arr);
	return arr;
};

export const PageNodesToTreeNodes: IPageNodesToTreeNodeArray = (pageNodes) => {
	const getTree = (pageNodes: TNode[], parentId: string | null) => {
		const arr: TTreeNode[] = [];
		pageNodes.forEach((node) => {
			if (node.parentId === parentId) {
				arr.push({
					properties: node,
					childs: getTree(
						pageNodes.filter((node) => node.parentId !== parentId),
						node.id
					),
				});
			}
		});
		return arr;
	};
	// console.log(`arr`, arr);
	return getTree(pageNodes,null);
};

const TreeViewCreator = (Item: FC<TTreeNode>): FC<{ nodes: TTreeNode[] }> => ({ nodes }) => (
	<>
		{nodes.map(({ properties, childs, childsTitle }, key) => {
			const TreeView = TreeViewCreator(Item);
			return (
				<Item {...{ properties, childs, childsTitle, key }}>
					{childs && <TreeView {...{ nodes: childs }} />}
				</Item>
			);
		})}
	</>
);

const container = {
	background: 'rgb(30,40,57)',
	color: '#8CC8FF',
	overflow: 'hidden',
	maxWidth: '280px',
	boxShadow: '2px 10px 5px 2px #00000055',
	'&:hover': { color: '#345' },
	'&::-webkit-scrollbar': { width: '4px' },
	'&::-webkit-scrollbar-thumb': { backgroundColor: '#567' },
};
const nodeContainer = {
	display: 'grid',
	gridTemplateColumns: '60% 35% 1em',
	borderTop: '2px solid #55667766',
	background: 'rgb(30,40,57)',
	color: '#8CC8FF',
	flexWrap: 'wrap',
	overflow: 'hidden',
	height: '1.2em',
	// minWidth: '280px',
	maxWidth: '280px',
	// background: 'rgb(30,40,57)',
	// backgroundColor: '#456c',
	// boxShadow: '2px 10px 5px 2px #00000055',
	'&:hover': { color: '#345' },
	// '&::-webkit-scrollbar': { width: '4px' },
	// '&::-webkit-scrollbar-thumb': { backgroundColor: '#567' },
};
const childsContainer = {
	borderTop: '4px solid rgba(140, 200, 255, 0.2)',
	// display: 'flex',
	// color: 'rgb(140, 200, 255)',
	// flexWrap: 'wrap',
	// maxWidth: '280px',
	background: 'rgb(30,40,57)',
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

const childsTitle = {
	marginLeft: '10px',
	color: '#888c',
	// backgroundColor: 'rgba(140, 200, 255, 0.8)',
};
const nodeStyles: { [name: string]: TJssStyle } = {
	container,
	nodeContainer,
	nodePropName,
	nodePropValue,
	childsContainer,
	childsTitle,
};
jss.setup(preset());
const { classes } = jss.createStyleSheet(nodeStyles).attach();

const TreeNode: FC<TTreeNode> = ({ properties, childsTitle, childs, children }) => {
	return (
		<div className={classes.container}>
			{properties &&
				Object.keys(properties).map((name, index) => (
					<div className={classes.nodeContainer} key={index}>
						<div className={classes.nodePropName}>{name}</div>
						<div className={classes.nodePropValue}>{properties[name]}</div>
					</div>
				))}
			{childs && (
				<div className={classes.childsContainer}>
					{childsTitle && <div className={classes.childsTitle}>{childsTitle}</div>}
					<div>{children}</div>
				</div>
			)}
			{/* <div className={classes.value}>{JSON.stringify(data)}</div> */}
		</div>
	);
};

export const TestView = TreeViewCreator(TreeNode);
