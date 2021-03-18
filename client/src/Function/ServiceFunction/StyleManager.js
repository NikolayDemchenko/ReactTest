import { createVariable } from '../../AppFunction';
export const StyleManager = (page, node, setPage) => {
	const updateStyleById = (styleId, propName, propValue) => {
		// console.log("page :>> ", page);
		setPage((page) => {
			const styles = page.styles.map((style) => {
				if (style.id === styleId) {
					return { ...style, [propName]: propValue };
				} else {
					return style;
				}
			});
			return { ...page, styles };
		});
	};
	return {
		cloneStyle: () => {
			setPage((page) => {
				const { name, data } = page.styles.find(({ id }) => id === node.styleId);
				const styleName = name + '_copy';
				const clonedStyle = createVariable(data, styleName);
				console.log('clonedStyle', clonedStyle);
				const changedTag = { ...node, styleId: clonedStyle.id };
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
		},
		updateStyleData: (data) => updateStyleById(node.styleId, 'data', data),
		updateStyleName: (name) => {
			!page.styles.find((style) => style.name === name) && updateStyleById(node.styleId, 'name', name);
		},
		getDefaultStyleProps: () => {
			// console.log('getDefaultStyleProps :>> ', id);
			const result = Object.entries(getComputedStyle(document.getElementById(node.id)))
				.map(([key, value]) => {
					key = +key || key === '0' ? +key : key;
					return { key, value };
				})
				.filter((obj) => typeof obj.key !== 'number');
			return result;
		},
	};
};
