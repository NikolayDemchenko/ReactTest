import React, { useContext } from 'react';
import NavTag from './NavTag';
import { NavigationContext } from '../../../../AppFunction';

function TagList() {
	const {
		state: { page },
	} = useContext(NavigationContext);
	const nodes = page.nodes.filter(({ parentId }) => parentId === null);
	return <NavTags {...{nodes }} />;
}
function NavTags(props) {
	return props.nodes.map((node, index) => {
		return <NavTag key={index} node={node} />;
	});
}
export { TagList, NavTags };
