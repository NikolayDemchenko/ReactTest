import { MouseEventHandler } from 'react';

import {
  INodeManager,
  TJssStyle,
  TNode,
  TPage,
  TSetState,
  TStyle,
  TStyleProperty,
} from './BaseTypes';
import { IUpdateNode } from './IFunctions';

export interface IFCEditor {
	setPage: TSetState<TPage>;
	page: TPage;
}
export interface IAssingStyle {
	assignStyleId: string | undefined;
	setAssignStyleId: TSetState<string | undefined>;
}
export interface IFCAttributesPanel extends IFCEditor, IAssingStyle {
	nodeManager: INodeManager;
	node: TNode;
}
export interface IFCStylePanel extends IFCAttributesPanel {
	nodeStyle: TStyle;
}

export interface IFCPropertiesPanel {
	node: TNode;
	panelStyle: TJssStyle;
	name: string;
	setName: Function;
	updateStyleData: Function;
	removePanel: Function;
	defaultCssProps: string[];
	previewBase: TJssStyle;
}

export interface IFCProperties extends IFCPropertiesPanel{
	tabIndex?: number;
	name: string;
	value?: string;
	setName: Function;
	setValue?: Function;
	removeProperty?: MouseEventHandler<HTMLDivElement>;
	onDrop?: Function;
	draggedProp?: TStyleProperty|undefined;
	setDraggedProp?: TSetState<TStyleProperty|undefined>;
	previewBase: TJssStyle;
	node: TNode;
	panelStyle: TJssStyle;
	parentName: string;
}
export interface IFCProperty {
	tabIndex?: number;
	name: string;
	value: string;
	setName: Function;
	setValue: Function;
	removeProperty: MouseEventHandler<HTMLDivElement>;
	onDrop: Function;
	draggedProp: TStyleProperty|undefined;
	setDraggedProp: TSetState<TStyleProperty|undefined>;
	previewBase: TJssStyle;
	node: TNode;
	panelStyle: TJssStyle;
}
export interface IFCSettingsPanel extends IAssingStyle {
	page: TPage;
	updateNode: IUpdateNode;
	cloneStyle: Function;
	updateStyleName: Function;
	updateStyleData: Function;
	node: TNode;
	nodeStyle: TStyle;
}
export interface IFCSelectPanel {
	items: readonly string[];
	setItem: Function;
	excludedItems?: string[];
	closeAftSelect?: boolean;
	selected?: string;
	getItems?: Function;
	button?: JSX.Element;
}
export interface IFCPaper {
	value: string;
	setValue: Function;
	setPreview?: Function;
	dataType?: string;
}
export interface IFCPopupInput extends IFCPaper {
	onEnter?: Function;
	onExit?: Function;
	height?: string;
	width?: string;
}
export interface IFCBackSettings extends IFCEditor {}