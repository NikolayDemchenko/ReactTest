import React, { FC, useState, useContext } from 'react';
import { log, funcLog } from '../../../../Log';
import PropertiesPanel from './PropertiesPanel';
import SettingsPanel from './SettingsPanel';
import { StyleManager } from '../../../../AppFunction';
import { IStylePanel } from '../../../../Types/IProps';
const StylePanel: FC<IStylePanel> = ({ node, setPage, page, nodeStyle, updateTag }) => {
	// console.log("%cStylePanel-VerticalPanel-App", "color: green");
	console.log('nodeStyle', nodeStyle);
	const [draggedProp, setDraggedProp] = useState();
	const { cloneStyle, updateStyleData, updateStyleName, getDefaultStyleProps } = StyleManager(page, node, setPage);

	return (
		<div style={{ background: 'rgba(30,40,57,.6)' }} title="CSS (JSS) Стили">
			<SettingsPanel
				{...{ page, updateTag, nodeStyle, updateStyleName, updateStyleData, setPage, node, cloneStyle }}
			/>
			<PropertiesPanel
				{...{
					panelStyle: nodeStyle.data,
					node,
					updateStyleData,
					name: 'Style',
					draggedProp,
					setDraggedProp,
					allStyleProps: getDefaultStyleProps,
					previewBase: nodeStyle.data,
				}}
			/>
		</div>
	);
};

export default StylePanel;
// export default log(StylePanel);
// export default React.memo(log(StylePanel));
