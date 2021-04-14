import React, { FC } from 'react';

import { StyleManager } from '../../../../AppFunction';
import { IFCStylePanel } from '../../../../Types/IProps';
import PropertiesPanel from './PropertiesPanel';
import SettingsPanel from './SettingsPanel';

const StylePanel: FC<IFCStylePanel> = ({
	setPage,
	page,
	node,
	nodeStyle,
	nodeManager,
	assignStyleId,
	setAssignStyleId,
}) => {
	// console.log('%cStylePanel', 'color: green');
	// console.log('nodeStyle', nodeStyle);

	const { cloneStyle, updateStyleData, updateStyleName } = new StyleManager(page, node, setPage, nodeStyle);
	const { getDefaultCssProps, updateNode } = nodeManager;

	return (
		<div style={{ background: 'rgba(30,40,57,.6)' }} title="CSS (JSS) Стили">
			<SettingsPanel
				{...{
					page,
					setPage,
					node,
					nodeStyle,
					updateNode,
					cloneStyle,
					updateStyleName,
					updateStyleData,
					assignStyleId,
					setAssignStyleId,
				}}
			/>
			<PropertiesPanel
				{...{
					panelStyle: nodeStyle.data,
					node,
					updateStyleData,
					name: 'Style',
					defaultCssProps: getDefaultCssProps(node.id),
					previewBase: nodeStyle.data,
				}}
			/>
		</div>
	);
};

export default StylePanel;
// export default log(StylePanel);
// export default React.memo(log(StylePanel));
