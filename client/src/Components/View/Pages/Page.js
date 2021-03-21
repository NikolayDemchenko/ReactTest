import React, { useContext } from 'react';
import { log, funcLog } from '../../../Log';
import Nodes from './Nodes/Nodes';
import jss from 'jss';
import { Context } from '../../../AppFunction';

function Page({ selectedId, page, classes, onClick }) {
	// console.log("page-App");

	document.querySelector('body').className = jss
		.createStyleSheet({ bodyStyle: page.bodyStyle })
		.attach().classes.bodyStyle;
	const nodes = page.nodes.filter(({ parentId }) => parentId === null);

	return <Nodes {...{ selectedId, onClick, classes, nodes, page }} />;
}
export default log(Page);
