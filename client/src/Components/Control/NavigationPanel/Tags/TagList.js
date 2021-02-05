import React, { useContext } from 'react';
import NavTag from './NavTag';
import { NavigationContext, TagManager } from '../../../../AppFunction';
function TagList() {
	const { state, setState } = useContext(NavigationContext);
	const { createTag, removeTag } = TagManager(state, setState);
	// console.log('page', page)
	const nodes = state.page.nodes.filter(({ parentId }) => parentId === null);
	return <NavTags {...{ nodes, state, createTag, removeTag }} />;
}
function NavTags({ nodes, state, createTag, removeTag }) {
	return nodes.map((node, index) => {
		return <NavTag key={index} {...{ node, state, createTag, removeTag }} />;
	});
}
export { TagList, NavTags };
