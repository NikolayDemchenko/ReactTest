import { FC, ReactElement } from "react";

export type MyNodeType = string | IMyElement
export type MyNodesType = MyNodeType[];
export interface IMyNodes {
	add(node: MyNodeType): void;
	removeByIndex(index: number): void;
	updateByIndex(index: number, node: MyNodeType): void;
	value(): MyNodesType;
}

export type MyElementType = {
	id: string;
	type: string;
	properties: MyPropertiesType;
	nodes?: MyNodesType
};
export interface IMyElement {
	// updateElement(element: MyElementType):{};
	// value(): MyElementType;
	view: FC
}

export type MyPropertiesType = { [key: string]: any };
export interface IMyProperties {
	createOrUpdateProperty(key: string, value: any): void;
	removeProperty(key: string): void;
	value(): MyPropertiesType;
}


export type StylesType = StyleType[]
export type StyleType = {
	name: string;
	data: MyPropertiesType;
};
