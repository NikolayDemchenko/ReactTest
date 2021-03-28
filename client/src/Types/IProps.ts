import { MouseEventHandler } from 'react';
import { TPage, TSetState, TStyle, TNode, INodeManager, TJssStyle, TStyleProperty } from './BaseTypes';
import { IUpdateNode } from './IFunctions';
interface IFCEditor {
	setPage: TSetState<TPage>;
	page: TPage;
}
interface IAssingStyle {
	assignStyleId: string | undefined;
	setAssignStyleId: TSetState<string | undefined>;
}
interface IFCAttributesPanel extends IFCEditor, IAssingStyle {
	nodeManager: INodeManager;
	node: TNode;
}
interface IFCStylePanel extends IFCEditor, IAssingStyle, IFCAttributesPanel {
	nodeStyle: TStyle;
}

interface IFCPropertiesPanel {
	node: TNode;
	panelStyle: TJssStyle;
	name: string;
	setName: Function;
	updateStyleData: Function;
	removePanel: Function;
	defaultCssProps: string[];
	previewBase: TJssStyle;
}

interface IFCProperties extends IFCPropertiesPanel, IFCProperty {
	parentName: string;
}
interface IFCProperty {
	tabIndex: number;
	name: string;
	value: string;
	setName: Function;
	setValue: Function;
	removeProperty: MouseEventHandler<HTMLDivElement>;
	onDrop: Function;
	draggedProp: TStyleProperty;
	setDraggedProp: TSetState<TStyleProperty>;
	previewBase: TJssStyle;
	node: TNode;
	panelStyle: TJssStyle;
}
interface IFCSettingsPanel extends IAssingStyle {
	page: TPage;
	updateNode: IUpdateNode;
	cloneStyle: Function;
	updateStyleName: Function;
	updateStyleData: Function;
	node: TNode;
	nodeStyle: TStyle;
}
interface IFCSelectPanel {
	items: readonly string[];
	setItem: Function;
	excludedItems?: string[];
	closeAftSelect?: boolean;
	selected?: string;
	getItems?: Function;
	button?: JSX.Element;
}
interface IFCPaper {
	value: string;
	setValue: Function;
	setPreview?: Function;
	dataType?: string;
}
interface IFCPopupInput extends IFCPaper {
	onEnter?: Function;
	onExit?: Function;
	height?: string;
	width?: string;
}
interface IFCBackSettings extends IFCEditor {}

export type {
	IFCStylePanel,
	IFCAttributesPanel,
	IFCEditor,
	IFCSelectPanel,
	IFCBackSettings,
	IFCPopupInput,
	IFCPaper,
	IFCSettingsPanel,
	IFCPropertiesPanel,
	IFCProperties,
	IFCProperty,
};
