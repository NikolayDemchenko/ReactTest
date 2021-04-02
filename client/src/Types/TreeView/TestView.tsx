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

type TObject = { [name: string]: string | TObject };

const styleData: TObject = {
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

interface IObjectToObjectArray {
	(obj: TObject): TObjectArray;
}
const ObjectToArray: IObjectToObjectArray = (obj: TObject) => {
	let arr: TObjectArray = [];
	Object.keys(obj).map((key: string) => {
		if (typeof obj[key] === 'string') {
			// console.log(`obj[key]`, key, obj[key]);
			arr.push({ [key]: obj[key] as string });
		} else {
			arr.push({ [key]: ObjectToArray(obj[key] as TObject) });
		}
	});
	// console.log(`arr`, arr);
	return arr;
};
const ObjectToReactNodes = (
	obj: TObject,
	ItemComponent: ({ name, value }: TProperty) => ReactElement | null,
	ListComponent: ({ list }: IListItem) => ReactElement | null
) => {
	const reactElements: ReactElement[] = [];

	Object.keys(obj).forEach((name: string) => {

		if (typeof obj[name] === 'string') {
			reactElements.push(<ItemComponent {...{ name, value: obj[name] as string }} />);
			console.log(`li`, name, obj[name]);
		} else {
			reactElements.push(<ListComponent {...{ list: ObjectToReactNodes(obj[name] as TObject,ItemComponent,ListComponent) }} />);
		}
	});
	return reactElements;
};

interface IListItem {
	list: ReactElement[];
}
const ListItem: FC<IListItem> = ({ list }) => (
	<>
		{list.map((item, key) => (
			<div style={{border:"1px solid black"}} {...{ key }}>{item}</div>
		))}
	</>
);

const Item: FC = ({ children }) => {
	return <>{children}</>;
}
const getTreeNode=(item:FC<{}>, listItem:FC<IListItem>): FC => () => {
	return <>{item}{listItem}</>;
}

const TreeNode=getTreeNode(Item,ListItem)




type TProperty = { name: string; value: string };

const ViewProperty: FC<TProperty> = ({ name, value }) => {
	return <>{`${name}: ${value}`}</>;
};

type TObjectArray = { [name: string]: string | TObjectArray }[];


const ObjectArrayToReactNodes = (
	list: TObjectArray,
	ItemComponent: ({ name, value }: TProperty) => ReactElement | null,
	ListComponent: ({ list }: IListItem) => ReactElement | null
): ReactElement[] => {

	const reactElements: ReactElement[] = [];

	list.forEach((li) => {
		const name = Object.keys(li)[0];

		if (typeof li[name] === 'string') {
			reactElements.push(<ItemComponent {...{ name, value: li[name] as string }} />);
			console.log(`li`, name, li[name]);
		} else {
			reactElements.push(
				<ListComponent
					{...{ list: ObjectArrayToReactNodes(li[name] as TObjectArray, ItemComponent, ListComponent) }}
				/>
			);
		}
	});
	return reactElements;
};

// const list = ObjectArrayToReactNodes(ObjectToArray(styleData), ViewProperty, ListItem);
const list = ObjectToReactNodes(styleData, ViewProperty, ListItem);

export const TestView = () => <ListItem {...{ list }} />;
