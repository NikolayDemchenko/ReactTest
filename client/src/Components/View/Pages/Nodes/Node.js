import React, { useContext } from 'react';
import Nodes from './Nodes';
import { log, funcLog } from '../../../../Log';
import { Context } from '../../../../AppFunction';
function Node(props) {
	const { node, onClick, classes } = props;

	const click = (e) => {
		// console.log('node :>> ', node);
		// console.log("e.target.id", e.target.id);
		e.stopPropagation();
		onClick(node);
	};

	const { page } = useContext(Context);
	const nodes = page.nodes.filter(({ parentId }) => parentId === node.id);

	return (
		<node.tag id={node.id} className={classes[node.styleId]} onClick={click}>
			{nodes && <Nodes {...props} nodes={nodes} />}
		</node.tag>
	);
}

// function areEqual(prevProps, nextProps) {
// }
// export default React.memo(log(Tag), areEqual);
export default React.memo(log(Node));
