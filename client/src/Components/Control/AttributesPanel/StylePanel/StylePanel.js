import React, { useState, useContext } from 'react';
// import jss from "jss";
import { log, funcLog } from '../../../../Log';
import PropertiesPanel from './PropertiesPanel';
import SettingsPanel from './SettingsPanel';
import { createUniqueName, createVariable, Context } from '../../../../AppFunction';

function StylePanel(props) {
	// console.log("%cStylePanel-VerticalPanel-App", "color: green");
	// console.log("props :>> ", props);
	const {		
		setState,
		state: { page, node, assignStyleId },
	} = useContext(Context);
	const tagStyle = page.styles.find(({ id }) => id === node.styleId);

	// const {panelStyle } = props;

	// console.log('node', node.styleId)
	const [draggedProp, setDragged] = useState();

	const addStyle = (data, name, node) => {
		setState((state) => {
			const names = page.styles.map((style) => style.name);
			const newStyle = createVariable(data, createUniqueName(name, names));
			console.log('newStyle', newStyle);
			const changedTag = { ...node, styleId: newStyle.id };			
			return {
				...state,
				page: {
					...state.page,
					nodes: page.nodes.map((node) => {
						if (changedTag.id === node.id) {
							return changedTag;
						} else {
							return node;
						}
					}),
					styles: [...page.styles, newStyle],
				},
				node: changedTag,
			};
		});
	};

	const updateStyleById = (styleId, propName, propValue, setState) => {
		// console.log("page :>> ", page);
		setState((state) => {
			const styles = state.page.styles.map((style) => {
				if (style.id === styleId) {
					return { ...style, [propName]: propValue };
				} else {
					return style;
				}
			});
			return { ...state, page: { ...state.page, styles } };
		});
	};

	const updateStyleData = (data) => updateStyleById(node.styleId, 'data', data, setState);

	const updateStyleName = (name) => {
		!page.styles.map((style) => style.name).find((element) => element === name) &&
			updateStyleById(node.styleId, 'name', name, setState);
	};

	const getDefaultStyleProps = (id) => {
		// console.log('getDefaultStyleProps :>> ', id);
		const result = Object.entries(getComputedStyle(document.getElementById(id)))
			.map(([key, value]) => {
				key = +key || key === '0' ? +key : key;
				return { key, value };
			})
			.filter((obj) => typeof obj.key !== 'number');
		return result;
	};

	const setDraggedProp = (item) => {
		console.log('setDraggedProp', item);
		setDragged(item);
	};
	return (
		<div style={{ background: 'rgba(30,40,57,.6)' }} title="CSS (JSS) Стили">
			<SettingsPanel
				{...{
					tagStyle,
					updateStyleName,
					updateStyleData,
					assignStyleId,
					setState,
					node,
					addStyle,
				}}
			/>
			<PropertiesPanel
				{...{
					panelStyle: tagStyle.data,
					node,
					updateStyleData,
					name: 'Style',
					draggedProp,
					setDraggedProp,
					allStyleProps: () => getDefaultStyleProps(node.id),
					previewBase: tagStyle.data,
				}}
			/>
		</div>
	);
}

export default React.memo(log(StylePanel));
