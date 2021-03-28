import { createVariable } from '../../AppFunction';
import { TJssStyle, IStyleManager,TPage, TNode, TSetState, TStyle } from '../../Types/BaseTypes';
export class StyleManager implements IStyleManager {
	page: TPage;
	node: TNode;
	setPage: TSetState<TPage>;
	style: TStyle;
	constructor(page: TPage, node: TNode, setPage: TSetState<TPage>, style: TStyle) {
		this.page = page;
		this.setPage = setPage;
		this.node = node;
		this.style = style;
	}

	cloneStyle = () => {
		this.setPage((page) => {
			// const style = page.styles.find(({ id }) => id === node.styleId);
			const { name, data } = this.style;
			const styleName = name + '_copy';
			const clonedStyle = createVariable(data, styleName);
			console.log('clonedStyle', clonedStyle);
			const changedTag = { ...this.node, styleId: clonedStyle.id };
			return {
				...page,
				nodes: page.nodes.map((node) => {
					if (changedTag.id === node.id) {
						return changedTag;
					} else {
						return node;
					}
				}),
				styles: [...page.styles, clonedStyle],
			};
		});
	};

	updateStyleById = (styleId: string, propName: string, propValue: string | TJssStyle) => {
		this.setPage((page) => {
			return {
				...page,
				styles: page.styles.map((style) => {
					if (style.id === styleId) {
						return { ...style, [propName]: propValue };
					} else {
						return style;
					}
				}),
			};
		});
	};

	updateStyleData = (data: TJssStyle) => this.updateStyleById(this.node.styleId, 'data', data);
	updateStyleName = (name: string) => {
		!this.page.styles.find((style) => style.name === name) && this.updateStyleById(this.node.styleId, 'name', name);
	};
}
