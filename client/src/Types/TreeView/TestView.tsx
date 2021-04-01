import React, { ReactElement, ReactNode } from 'react';
import { FC } from 'react';

// interface IComponent<T> {
// 	Component: FC<T>;
// }

// interface IListElement {
// 	list: ReactNode[];
// }
// interface IItem extends IListElement {
// 	parent: IItem;
// }

// class Tree implements INodeList, IComponent<INodeList> {
// 	nodeList;
// 	constructor(nodeList: INode[]) {
// 		this.nodeList = nodeList;
// 	}
// 	Component: FC<INodeList> = ({ children, nodeList }) => <div>{children}</div>;
// }

// export type { IListElement };

// const Tree: FC<INodeList> = ({ nodeList }) => {
// 	return <NodeList {...{ nodeList }} />;
// };
// const TreeView = (list: IItem[]) => () => {
// 	const NodeList: FC<{list: ReactNode[]}> = ({ list }) => <>{list.map((item) => ({ item }))}</>;
// 	const Node: FC<IItem> = ({ list }) => {
// 		return <NodeList {...{ list }} />;
// 	};
// 	// return <NodeList {...{ list }} />;
// };

type TJssStyle = { [name: string]: string | number | TJssStyle };

const styleData: TJssStyle = {
	display: 'flex',
	justifyContent: 'center',
	flexWrap: 'wrap',
	alignSelf: 'center',
	height: '720px',
	width: '700px',
	backgroundColor: '#567',
	margin: 'auto',
	marginTop: '60px',
	marginBottom: '60px',
	'&:hover': {
		transform: 'perspective(200px) scaleZ(-0.5) translateZ(-2px)',
		boxShadow: '0 8px 5px 2px #0005, inset 0 8px 5px 2px #00ffff',
		transition: '0.2s',
		marginBottom: '60px',
	},
};

interface IObjectToArray {
	(obj: object): [];
}
const ObjectToArray: IObjectToArray = (obj: object) => {
	
	return [];
};

const ListItem: FC<{ list: ReactNode[] }> = ({ list }) => (
	<>
		{list.map((item) => (
			<>{item}</>
		))}
	</>
);

const Item: FC = ({ children }) => {
	return <>{children}</>;
};

type TList = ({ [name: string]: string } | { [name: string]: { [name: string]: string }[] })[];

const baseList: TList = [
	{ item: 'Привет!' },
	{ item: 'Как' },
	{ item: 'твои' },
	{ item: 'дела' },
	{ item: ' ?' },
	{ item: [{ item: 'Привет!' }, { item: 'Хорошо!' }, { item: 'Спасибо' }, { item: 'а' }, { item: 'твои ?' }] },
];

const list = [
	<Item>Привет!</Item>,
	<Item>Как</Item>,
	<Item>твои</Item>,
	<Item>дела</Item>,
	<Item>?</Item>,
	<ListItem
		{...{ list: [<Item>Привет!</Item>, <Item>Как</Item>, <Item>твои</Item>, <Item>дела</Item>, <Item>?</Item>] }}
	/>,
];

export const TestView = () => <ListItem {...{ list }} />;
