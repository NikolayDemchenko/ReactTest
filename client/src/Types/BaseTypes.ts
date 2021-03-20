import { SetStateAction } from 'react';
import {IUpdateProp} from './InterfacesOfFunctions'
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
	bodyStyle: object;
	styles: IStyle[];
	nodes: INode[];
}
interface IStyle {
	id: string;
	name: string;
	data: object;
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
	page: IPage;
	setPage: React.Dispatch<SetStateAction<IPage>>;
	PageREST: object;
	node?: INode;
	updateTag?: Function;
	nodeStyle?: IStyle;
	assignStyleId?: string;
	setAssignStyleId?: Function;
}
interface ITagManager {
	classes: { [k: string]: any };
	getTagTree: Function;
	createTag: Function;
	removeTag: Function;
	updateTag: IUpdateProp;
}
export type { IApplication, IPage, INode, IViewNode, IStyle, IAppContext,ITagManager};
