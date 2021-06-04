export type MyNodeType = string | MyElementType
export type MyNodesType = MyNodeType[];
export interface IMyChilds {
	add(node: MyNodeType): void;
	removeByIndex(index: number): void;
	updateByIndex(index: number, node: MyNodeType): void;
	value(): MyNodesType;
}

export type MyElementType = {
	type: string;
	properties: MyPropertiesType;
	nodes?: MyNodesType
};
export interface IMyElement {
	updateType(type: string): void;
	value(): MyElementType;
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
