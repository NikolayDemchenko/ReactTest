import React, { FC } from 'react';

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

type TObject = { [name: string]: string | number | boolean | TObject };

const styleData: TObject = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  alignSelf: "center",
  height: "720px",
  width: "700px",
  backgroundColor: "#567",
  margin: "auto",
  marginTop: "60px",
  marginBottom: "60px",
  "&:hover": {
    transform: "perspective(200px) scaleZ(-0.5) translateZ(-2px)",
    boxShadow: "0 8px 5px 2px #0005, inset 0 8px 5px 2px #00ffff",
    transition: "0.2s",
    marginBottom: "60px",
  },
};

interface IObjectToObjectArray {
  (obj: TObject): TObjectArray;
}
const ObjToObjArray: IObjectToObjectArray = (obj: TObject) => {
  let arr: TObjectArray = [];
  Object.keys(obj).map((key: string) => {
    if (
      typeof obj[key] !== "string" &&
      typeof obj[key] !== "number" &&
      typeof obj[key] !== "boolean"
    ) {
      // console.log(`obj[key]`, key, obj[key]);
      arr.push({ [key]: ObjToObjArray(obj[key] as TObject) });
    } else {
      arr.push({ [key]: obj[key] as string });
    }
  });
  //   console.log(`arr`, arr);
  return arr;
};
// const ObjectToReactNodes = (
// 	obj: TObject,
// 	ItemComponent: ({ name, value }: TProperty) => ReactElement | null,
// 	ListComponent: ({ list }: IListItem) => ReactElement | null
// ) => {
// 	const reactElements: ReactElement[] = [];

// 	Object.keys(obj).forEach((name: string) => {
// 		if (typeof obj[name] === 'string') {
// 			reactElements.push(<ItemComponent {...{ name, value: obj[name] as string }} />);
// 			console.log(`li`, name, obj[name]);
// 		} else {
// 			reactElements.push(
// 				<ListComponent {...{ list: ObjectToReactNodes(obj[name] as TObject, ItemComponent, ListComponent) }} />
// 			);
// 		}
// 	});
// 	return reactElements;
// };

// interface IListItem {
// 	list: ReactElement[];
// }

type TdataList = { [key: string]: string | number }[];

// Нужно в ListItem передать Item и dataList - массив объектов с свойствами типа string | number для него
const ListItemCreator = <T extends {}[]>(
  Item: FC<{ data: object }>,
  dataList: T
): FC => () => (
  <>
    {dataList.map((data, key) => (
      <Item {...{ data, key }} />
    ))}
  </>
);

const TreeViewCreator = (
  Item: FC<{ data: object }>,
  ListItems: FC<{name:string|undefined}>,
  dataList: TObjectArray,
  treeViewName?:string
): FC => () => (
  <ListItems name={treeViewName}>
    {dataList.map((data, key) => {
      const name = Object.keys(data)[0];
      const value = Object.values(data)[0];
      console.log("value :>> ", value);
      if (value instanceof Array) {
        const TreeView = TreeViewCreator(Item, ListItems, value);
        return (
          <ListItems  {...{name, key}}>
            <TreeView />
          </ListItems>
        );
      } else {
        return <Item {...{ data, key }} />;
      }
    })}
  </ListItems>
);

const Item: FC<{ data: object }> = ({ data }) => {
  return (
    <div style={{ display: "flex", border: "1px solid black" }}>
      <div>{Object.keys(data)}</div>
      <div>{Object.values(data)}</div>
      {/* <div>{JSON.stringify(Object.values(data)[0])}</div> */}
      {/* {JSON.stringify(data)} */}
    </div>
  );
};
const ListItems: FC<{name:string|undefined}> = ({ name,children }) => (
	<>
	<div style={{color:'red'}}>{name}</div>{children}		
	</>
);


const myDataList: TdataList = [
  { display: "flex" },
  { justifyContent: "center" },
  { flexWrap: "wrap" },
  { alignSelf: "center" },
  { height: "720px" },
  { width: "700px" },
  { backgroundColor: "#567" },
  { margin: "auto" },
  { marginTop: "60px" },
  { marginBottom: "60px" },
];
console.log("ObjToObjArray(styleData) :>> ", ObjToObjArray(styleData));
const ListItem = TreeViewCreator(Item,ListItems, ObjToObjArray(styleData));


// const ListItem: FC<IListItem> = ({ list }) => (
// 	<>
// 		{list.map((item, key) => (
// 			<div style={{border:"1px solid black"}} {...{ key }}>{item}</div>
// 		))}
// 	</>
// );

// const getTreeNode=(Item:ReactElement, ListItem:ReactElement): FC => () => {
// 	return <>{Item}{ListItem}</>;
// }

// const TreeNode=getTreeNode(<Item />,<ListItem/>)

type TProperty = { name: string; value: string };

// const ViewProperty: FC<TProperty> = ({ name, value }) => {
// 	return <>{`${name}: ${value}`}</>;
// };

type TObjectArray = {
  [name: string]: string | number | boolean | TObject | TObjectArray;
}[];

// const ObjectArrayToReactNodes = (
// 	list: TObjectArray,
// 	ItemComponent: ({ name, value }: TProperty) => ReactElement | null,
// 	ListComponent: ({ list }: IListItem) => ReactElement | null
// ): ReactElement[] => {
// 	const reactElements: ReactElement[] = [];

// 	list.forEach((li) => {
// 		const name = Object.keys(li)[0];

// 		if (typeof li[name] === 'string') {
// 			reactElements.push(<ItemComponent {...{ name, value: li[name] as string }} />);
// 			console.log(`li`, name, li[name]);
// 		} else {
// 			reactElements.push(
// 				<ListComponent
// 					{...{ list: ObjectArrayToReactNodes(li[name] as TObjectArray, ItemComponent, ListComponent) }}
// 				/>
// 			);
// 		}
// 	});
// 	return reactElements;
// };

// const list = ObjectArrayToReactNodes(ObjectToArray(styleData), ViewProperty, ListItem);
// const list = ObjectToReactNodes(styleData, ViewProperty, ListItem);

export const TestView = () => <ListItem />;
// export const TestView = () => <ListItem {...{ list }} />;
