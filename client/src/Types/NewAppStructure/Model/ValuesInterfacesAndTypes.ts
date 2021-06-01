export type MyChildType = string | MyElementType|MyElementWithChildsType;
export type MyChildsType = MyChildType[];
export interface IMyChildren {
	add(child: MyChildType): void;
	removeByIndex(index: number): void;
	updateByIndex(index: number, child: MyChildType): void;
	value(): MyChildsType;
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
export type MyElementWithChildsType = {
	type: string;
	properties: MyPropertiesType;
	childs: MyChildsType;
};
export interface IMyContainer {
	value () :MyElementWithChildsType
}

export type MyPageType = {
	properties: MyPropertiesType;
	childs: MyChildsType;
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
