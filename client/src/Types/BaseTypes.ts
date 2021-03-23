import { SetStateAction } from 'react';
import { JssStyle, Classes } from 'jss';
import { IGetDefaultCssProps, IUpdateNode } from './IFunctions';
interface IApplication {
	id: string;
	name: string;
	domain: string;
	startPageId: string;
}
interface IPage {
	id?: string;
	ApplicationId: string;
	name: string;
	bodyStyle: { [propName: string]: string };
	styles: IStyle[];
	nodes: INode[];
}
type TSetState<T> = React.Dispatch<SetStateAction<T>>;
type TJssStyle = JssStyle;
interface IStyle {
	id: string;
	name: string;
	data: TJssStyle;
}
interface INode {
	id: string;
	index: number;
	parentId: string | null;
	tag: string;
	styleId: string;
}
interface IViewNode extends INode {
	childrens?: INode[];
}

interface IAppContext {
	assignStyleId: string | undefined;
	setAssignStyleId: React.Dispatch<SetStateAction<string | undefined>>;
}
type TJSSClasses = Classes<string | number>;


interface INodeManager {
	classes: TJSSClasses;
	getNodeTree: Function;
	getDefaultCssProps: IGetDefaultCssProps;
	createNode: Function;
	removeNode: Function;
	updateNode: IUpdateNode;
}
interface IStyleManager {
	cloneStyle: Function;
	updateStyleData: Function;
	updateStyleName: Function;
}
export type {
	IApplication,
	IPage,
	INode,
	IViewNode,
	IStyle,
	IAppContext,
	INodeManager,
	TSetState,
	IStyleManager,
	TJssStyle,
	TJSSClasses,
};
