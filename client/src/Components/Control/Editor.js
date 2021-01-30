import React,{useEffect} from 'react';
import Page from '../View/Pages/Page';
import AttributesPanel from './AttributesPanel/AttributesPanel';
import { TagManager, Context } from '../../AppFunction';

const Editor = ({ RESTManager, setState, state }) => {
	const page = state.page;
	const node = page.nodes.find(({ id }) => state.nodeId === id);
	const nodeStyle = node && page.styles.find(({ id }) => id === node.styleId);
	// console.log('node :>> ', node);
	const setPage = (page) => {
		console.log('page', page);
		setState((state) => ({ ...state, page }));
	};
	// console.log('state :>> ', state);

  const { createTag, removeTag, updateTag, classes } = TagManager(page, setPage, setState);
  useEffect(() => {
    setState((state) => ({ ...state, createTag, removeTag, updateTag }));
    return () => {
    
    }
  }, [])
	
	const onClick =
		state && state.assignStyleId
			? (nodeId) => updateTag(nodeId, 'styleId', state.assignStyleId)
			: (nodeId) => setState((state) => ({ ...state, nodeId }));

	return (
		<Context.Provider
			value={{
				createTag,
				removeTag,
				updateTag,
				RESTManager,
				page,
				node,
				nodeStyle,
				setPage,
				state,
				setState,
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
