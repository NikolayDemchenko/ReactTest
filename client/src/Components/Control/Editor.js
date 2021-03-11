import React, { useContext, useState } from 'react';
import Page from '../View/Pages/Page';
import AttributesPanel from './AttributesPanel/AttributesPanel';
import { TagManager, Context } from '../../AppFunction';

const Editor = () => {
	const { state, setState, PageREST } = useContext(Context);
	console.log('Editor');
	const page = state.page;
	const node = page.nodes.find(({ id }) => state.nodeId === id);
	const nodeStyle = node && page.styles.find(({ id }) => id === node.styleId);
	// console.log('nodeStyle', nodeStyle)
	// console.log('node :>> ', node);
	// console.log('state :>> ', state);
	//   console.log("page.nodes :>> ", page.nodes);
	const { updateTag, classes } = TagManager(state, setState);
	const [assignStyleId, setAssignStyleId] = useState();
	const onClick = assignStyleId
		? (nodeId) => updateTag(nodeId, 'styleId', assignStyleId)
		: (nodeId) => setState((state) => ({ ...state, nodeId }));

	return (
		<Context.Provider
			value={{
				updateTag,
				PageREST,
				page,
				node,
				nodeStyle,
				state,
				setState,
        assignStyleId,
				setAssignStyleId,
			}}
		>
			{node && <AttributesPanel />}
			<Page
				{...{
					bodyStyle: page.bodyStyle,
					selectedId: state && state.nodeId,
					onClick,
					classes,
				}}
			/>
		</Context.Provider>
	);
};

export default Editor;
