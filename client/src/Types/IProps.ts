import { IPage, TSetState, IStyle, INode, INodeManager, TJssStyle, } from './BaseTypes';
import { IUpdateNode } from './IFunctions';
interface IEditor {
	setPage: TSetState<IPage>;
	page: IPage;
}
interface IAssingStyle {
	assignStyleId: string | undefined;
	setAssignStyleId: TSetState<string | undefined>;
}
interface IAttributesPanel extends IEditor, IAssingStyle {
	nodeManager: INodeManager;
	node: INode;
}
interface IStylePanel extends IEditor, IAssingStyle,IAttributesPanel {
	nodeStyle: IStyle;
}
interface IPropertiesPanel extends IEditor, IAssingStyle {
	node: INode;
	panelStyle: TJssStyle;
	name: string;
	setName: Function;
	updateStyleData: Function;
	removePanel: Function;
	defaultCssProps: string[];
	previewBase: TJssStyle;
}
interface ISettingsPanel extends IAssingStyle {
	page: IPage;
	updateNode: IUpdateNode;
	cloneStyle: Function;
	updateStyleName: Function;
	updateStyleData: Function;
	node: INode;
	nodeStyle: IStyle;
}
interface ISelectPanel {
	items: readonly string[];
	setItem: Function;
	excludedItems?:string[]
	closeAftSelect?: boolean;
	selected?: string;
	getItems?: Function;
	button?: JSX.Element;
}
interface IPaper {
	value: string;
	setValue: Function;
	setPreview?: Function;
	dataType?: string;
}
interface IPopupInput extends IPaper {
	onEnter?: Function;
	onExit?: Function;
	height?: string;
	width?: string;
}
interface IBackSettings extends IEditor {}

export type {
	IStylePanel,
	IAttributesPanel,
	IEditor,
	ISelectPanel,
	IBackSettings,
	IPopupInput,
	IPaper,
	ISettingsPanel,
	IPropertiesPanel,
};
