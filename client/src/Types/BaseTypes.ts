import { SetStateAction } from 'react';
import { JssStyle, Classes } from 'jss';
import { IGetDefaultCssProps, IUpdateNode } from './IFunctions';

type TApplication = {
	id: string;
	name: string;
	domain: string;
	startPageId: string;
};
type TPage = {
	id?: string;
	ApplicationId: string;
	name: string;
	bodyStyle: { [propName: string]: string };
	styles: TStyle[];
	nodes: TNode[];
};
type TSetState<T> = React.Dispatch<SetStateAction<T>>;
// type TJssStyle = JssStyle;
type TJssStyle = { [name: string]: string | number | TJssStyle };
type TJSSClasses = Classes<string | number>;

type TStyle = {
	id: string;
	name: string;
	data: TJssStyle;
};
type TNode = {
	id: string;
	index: number;
	parentId: string | null;
	tag: string;
	styleId: string;
};
interface IViewNode extends TNode {
	childrens?: TNode[];
}

interface IAppContext {
	assignStyleId: string | undefined;
	setAssignStyleId: React.Dispatch<SetStateAction<string | undefined>>;
}

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
type TStyleProperty = {
	[name: string]: string | number;
};
export type {
	TApplication,
	TPage,
	TNode,
	TStyle,
	TSetState,
	TJssStyle,
	TJSSClasses,
	TStyleProperty,
	IViewNode,
	IAppContext,
	INodeManager,
	IStyleManager,
};
