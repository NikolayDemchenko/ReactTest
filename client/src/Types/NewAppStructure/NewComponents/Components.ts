import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

import shortid from 'shortid';

export class Page {
	private component: Component;

	constructor(props: { [key: string]: any }, children: ChildrenType) {
		this.component = new Component('div', props, children);
	}
	add = () => {
		// this.component
	};
	render = () => {
		ReactDOM.render(this.component.render(), document.getElementById('page'));
	};
}
export class Component {
	private type: string;
	private props?: Properties;
	private children?: Children;

	constructor(type: string, props: { [key: string]: any });
	constructor(type: string, props: { [key: string]: any }, children: ChildrenType);
	constructor(type: string, props: { [key: string]: any }, children?: ChildrenType) {
		this.type = type;
		this.props = new Properties({ ...props });
		if (children) this.children = new Children(children);
	}

	render = (): React.ReactElement => {
		if (this.children) {
			return createElement(this.type, this.props!.value(), this.children.render());
		} else {
			return createElement(this.type, this.props!.value());
		}
	};
}
export class ComponentContainer {
	private component:Component


	constructor(type: string, props: { [key: string]: any }, children: ChildrenType) {
		this.component = new Component(type,props,children) ;

	}

	render = (): React.ReactElement => {	
		return createElement(this.type, this.props!.value(), this.children.render());
	};
}

export class Properties {
	private props: { [key: string]: any };
	constructor(props: { [key: string]: any }) {
		this.props = props;
	}
	value = () => (this.props.key ? this.props : { ...this.props, key: shortid.generate() });
}

type ComponentType = {
	type: string;
	props?: { [key: string]: any };
	children?: ChildrenType;
};
type ChildType = string | ComponentType;
type ChildrenType = ChildType[];

export class Children {
	private children: ChildrenType;
	constructor(children: ChildrenType) {
		this.children = children;
	}

	add(child: ChildType): void {
		this.children.push(child);
	}

	remove(child: ChildType): void {
		this.children = this.children.filter((_child) => JSON.stringify(_child) !== JSON.stringify(child));
	}

	removeByIndex(index: number): void {
		if (index > -1 && this.children.length > 0) {
			this.children.splice(index, 1);
		}
	}
	updateByIndex(index: number, child: ChildType): void {
		if (index > -1 && this.children.length > 0) {
			this.children = this.children.map((_child, _index) => {
				if (_index === index) {
					return child;
				} else {
					return _child;
				}
			});
		}
	}

	render = () => {
		return this.children.map((child) =>
			typeof child === 'string'
				? child
				: (child.children && new Component(child.type, child.props || {}, child.children).render()) ||
				  new Component(child.type, child.props || {}).render()
		);
	};
}

const children = [
	'Текст в массиве',
	{ type: 'p', children: ['Некий текст'] },
	{ type: 'p', props: { style: { color: 'red' } }, children: ['Красный текст'] },
];
const div = new Children([
	'Текст в массиве',
	{ type: 'p', children: ['Некий текст'] },
	{ type: 'p', props: { style: { color: 'red' } }, children: ['Красный текст'] },
]);
const myPage = new Page({}, children);
div.add('Добавленный child');
div.add({ type: 'p', props: { style: { color: 'red' } }, children: ['Красный текст'] });
// div.removeByIndex(3);
div.updateByIndex(2, { type: 'span', props: { style: { color: 'red' } }, children: ['Обновлённый Красный текст'] });
// div.remove(	{ type: 'p', props: { style: { color: 'red' } }, children: ['Красный текст'] });
// div.remove('Добавленный child');
export { myPage };
export const MyComopnent = div.render();
