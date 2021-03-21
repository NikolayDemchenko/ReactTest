import { IPage, TSetPage, IStyle, INode } from './BaseTypes';
interface IEditor {
	setPage: TSetPage;
	page: IPage;
}
interface IAttributesPanel extends IEditor {
	updateTag: Function;
	selectedId: string;
}
interface IStylePanel extends IEditor{
	node: INode;
	nodeStyle: IStyle;
	updateTag: Function;
}
interface ISelectPanel {
	items: readonly string[];
	closeAftSelect?: boolean;
	selected: string;
	getItems?: Function;
	setItem: Function;
	button?: JSX.Element;
}
interface IPopupInput {
	value: string;
	setValue: Function;
	setPreview: Function;
	onEnter?:Function;
	onExit?: Function;
	height?: string;
	width?: string;
}
interface IBackSettings extends IEditor {}

export type { IStylePanel, IAttributesPanel, IEditor, ISelectPanel, IBackSettings,IPopupInput };
