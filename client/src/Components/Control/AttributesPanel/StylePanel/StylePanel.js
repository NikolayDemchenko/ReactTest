import React, { useState, useContext } from 'react';
// import jss from "jss";
import { log, funcLog } from '../../../../Log';
import PropertiesPanel from './PropertiesPanel';
import SettingsPanel from './SettingsPanel';
import { StyleManager, Context } from '../../../../AppFunction';

function StylePanel(props) {
	// console.log("%cStylePanel-VerticalPanel-App", "color: green");
	const {
		setState,
		page,
		node,
		nodeStyle,		
	} = useContext(Context);

	const [draggedProp, setDraggedProp] = useState();

	const { cloneStyle, updateStyleData, updateStyleName, getDefaultStyleProps } = StyleManager(page, node, setState);

	return (
		<div style={{ background: 'rgba(30,40,57,.6)' }} title="CSS (JSS) Стили">
			<SettingsPanel
				{...{
					nodeStyle,
					updateStyleName,
					updateStyleData,
					setState,
					node,
					cloneStyle,
				}}
			/>
			<PropertiesPanel
				{...{
					panelStyle: nodeStyle.data,
					node,
					updateStyleData,
					name: 'Style',
					draggedProp,
					setDraggedProp,
					allStyleProps: () => getDefaultStyleProps(),
					previewBase: nodeStyle.data,
				}}
			/>
		</div>
	);
}

export default React.memo(log(StylePanel));
