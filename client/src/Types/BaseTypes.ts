import { SetStateAction } from 'react';
import { JssStyle, Classes } from 'jss';
import { IUpdateProp } from './IFunctions';
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
	bodyStyle: {[propName:string]:string};
	styles: IStyle[];
	nodes: INode[];
}
type TSetPage = React.Dispatch<SetStateAction<IPage>>;
interface IStyle {
	id: string;
	name: string;
	data: JssStyle;
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
	assignStyleId: string|undefined;
	setAssignStyleId: React.Dispatch<SetStateAction<string|undefined>>;
}
type TJSSClasses = Classes<string | number>;
interface ITagManager {
	classes: TJSSClasses;
	getTagTree: Function;
	createTag: Function;
	removeTag: Function;
	updateTag: IUpdateProp;
}
export type { IApplication, IPage, INode, IViewNode, IStyle, IAppContext, ITagManager, TSetPage };
