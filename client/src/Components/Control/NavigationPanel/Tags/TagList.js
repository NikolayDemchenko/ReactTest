import React, { useContext } from 'react';
import NavTag from './NavTag';
import { Context, NodeManager } from '../../../../AppFunction';
function TagList(props) {
	const { state, setState } = useContext(Context);
	const { createNode, removeNode } =new NodeManager(state, setState);
	// console.log('page', props.page)
	const nodes = props.page.nodes.filter(({ parentId }) => parentId === null);
	return <NavTags {...{...props, nodes, state, createNode, removeNode }} />;
}
function NavTags(props) {
	return props.nodes.map((node, index) => {
		return <NavTag key={index} {...{...props, node}} />;
	});
}
export { TagList, NavTags };
