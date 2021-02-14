import React, { useContext } from 'react';
import NavTag from './NavTag';
import { NavigationContext, TagManager } from '../../../../AppFunction';
function TagList(props) {
	const { state, setState } = useContext(NavigationContext);
	const { createTag, removeTag } = TagManager(state, setState);
	console.log('page', state.page)
	const nodes = state.page.nodes.filter(({ parentId }) => parentId === null);
	return <NavTags {...{...props, nodes, state, createTag, removeTag }} />;
}
function NavTags(props) {
	return props.nodes.map((node, index) => {
		return <NavTag key={index} {...{...props, node}} />;
	});
}
export { TagList, NavTags };
