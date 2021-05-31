export type MyChildType = string | MyElementType|MyContainerType;
export type MyChildrenType = MyChildType[];
export interface IMyChildren {
	add(child: MyChildType): void;
	removeByIndex(index: number): void;
	updateByIndex(index: number, child: MyChildType): void;
	value(): MyChildrenType;
}

export type MyElementType = {
	type: string;
	properties: MyPropertiesType;
};
export interface IMyElement {
	updateType(type: string): void;
	value(): MyElementType;
}

export type MyPropertiesType = { [key: string]: any };
export interface IMyProperties {
	updateProperty(key: string, value: any): void;
	removeProperty(key: string): void;
	value(): MyPropertiesType;
}

// Пока не понятна необходимость наличия данного класса
export type MyContainerType = {
	type: string;
	properties: MyPropertiesType;
	children: MyChildrenType;
};
export interface IMyContainer {
	value () :MyContainerType
}

export type MyPageType = {
	properties: MyPropertiesType;
	children: MyChildrenType;
	// styles: StylesType;
};
export interface IMyPage {
	value () :MyPageType
}

export type StylesType = StyleType[]
export type StyleType = {
	name: string;
	data: MyPropertiesType;
};
