import React, { useContext, useState } from 'react';
import Page from '../View/Pages/Page';
import AttributesPanel from './AttributesPanel/AttributesPanel';
import { TagManager, Context } from '../../AppFunction';

const Editor = () => {
	const { page, setPage, state, setState, PageREST } = useContext(Context);
	console.log('Editor');

	// console.log('nodeStyle', nodeStyle)
	// console.log('node :>> ', node);
	console.log('page :>> ', page);
	//   console.log("page.nodes :>> ", page.nodes);
	const { updateTag, classes } = TagManager(state, setPage);
	const [assignStyleId, setAssignStyleId] = useState();
	const [selectedId, setSelectedId] = useState();
	const node = page.nodes.find(({ id }) => selectedId === id);
	const nodeStyle = node && page.styles.find(({ id }) => id === node.styleId);
	const onClick = assignStyleId
		? (selectedId) => updateTag(selectedId, 'styleId', assignStyleId)
		: (selectedId) => setSelectedId(selectedId);

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
					selectedId,
					onClick,
					classes,
				}}
			/>
		</Context.Provider>
	);
};

export default Editor;
