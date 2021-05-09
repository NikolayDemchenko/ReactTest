import React from 'react';

export interface IBaseComponent {
	tag: string;
	props: { [key: string]: any };
	render: (data: any) => React.DOMElement<{ [key: string]: any }, Element>;
}

export interface IVoidComponent extends IBaseComponent {
	valueAttribute: string | undefined;
}


export class Container implements IBaseComponent {
	tag: string;
	props: { [key: string]: any };
	render: (data: any) => React.DOMElement<{ [key: string]: any }, Element>;
	constructor(tag: string, props?: { [key: string]: any }) {
		this.tag = tag;
		this.props = props || {};
		this.render = (children) => React.createElement(this.tag, this.props, children);
	}
}

export class Void extends Container implements IVoidComponent {
	valueAttribute: string | undefined;
	constructor(tag: string, props?: { [key: string]: any }, valueAttribute?: string | undefined) {
		super(tag, props);
		this.valueAttribute = valueAttribute;
		this.render = (data) => {
			if (this.valueAttribute) this.props[this.valueAttribute] = data;
			return React.createElement(this.tag, this.props);
		};
	}
}
