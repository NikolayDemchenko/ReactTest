import React, { FC, useState } from 'react';
import PageComponent from '../View/Pages/Page';
import AttributesPanel from './AttributesPanel/AttributesPanel';
import { NodeManager } from '../../AppFunction';
import { IFCEditor } from '../../Types/IProps';
import { TNode } from '../../Types/BaseTypes';

const Editor: FC<IFCEditor> = ({ page, setPage }) => {
	console.log('Editor :>> ');
	const [assignStyleId, setAssignStyleId] = useState<string>();
	const [node, setNode] = useState<TNode>();

	// console.log('page :>> ', page);
	//   console.log("page.nodes :>> ", page.nodes);
	const nodeManager = new NodeManager(page, setPage);
	const { classes } = nodeManager;

	const onClick = assignStyleId
		? (selectedId: string) => nodeManager.updateNode(selectedId, 'styleId', assignStyleId)
		: (node: TNode) => setNode(node);

	return (
		<>
			{node && <AttributesPanel {...{ setPage, page, node, nodeManager, assignStyleId, setAssignStyleId }} />}
			<PageComponent
				{...{
					page,
					selectedId: node && node.id,
					onClick,
					classes,
				}}
			/>
		</>
	);
};

export default Editor;
