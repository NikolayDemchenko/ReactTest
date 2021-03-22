import { IPage, TSetPage, IStyle, INode } from './BaseTypes';
interface IEditor {
	setPage: TSetPage;
	page: IPage;
}
interface IAttributesPanel extends IEditor {
	updateNode: Function;
	selectedId: string;
}
interface IStylePanel extends IEditor {
	node: INode;
	nodeStyle: IStyle;
	updateNode: Function;
}
interface ISelectPanel {
	items: readonly string[];
	closeAftSelect?: boolean;
	selected: string;
	setItem: Function;
	getItems?: Function;
	button?: JSX.Element;
}
interface IPaper {
	value: string;
	setValue: Function;
	setPreview: Function;
	dataType?:string
}
interface IPopupInput extends IPaper{
	onEnter?: Function;
	onExit?: Function;
	height?: string;
	width?: string;
}
interface IBackSettings extends IEditor {}

export type { IStylePanel, IAttributesPanel, IEditor, ISelectPanel, IBackSettings, IPopupInput, IPaper };
