import React from 'react';
import Nodes from './Nodes';
import { log, funcLog } from '../../../../Log';
import { Context } from '../../../../AppFunction';
function Node(props) {
	const { node, onClick, classes,page } = props;

	const click = (e) => {
		e.stopPropagation();
		onClick(node);
	};
	const BaseNode = ({ children }) => (
		<node.tag id={node.id} className={classes[node.styleId]} onClick={click}>
			{children}
		</node.tag>
	);	
	const nodes = page.nodes.filter(({ parentId }) => parentId === node.id);
	return (
		<div style={{ outline: props.selectedId === node.id && '1px dashed #5af' }}>
			{nodes.length > 0 ? (
				<BaseNode>
					<Nodes {...props} nodes={nodes} />
				</BaseNode>
			) : (
				<BaseNode />
			)}
		</div>
	);
}

export default React.memo(log(Node));
