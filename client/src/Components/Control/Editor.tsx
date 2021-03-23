import React, { FC, useState } from 'react';
import PageComponent from '../View/Pages/Page';
import AttributesPanel from './AttributesPanel/AttributesPanel';
import { NodeManager } from '../../AppFunction';
import { IEditor } from '../../Types/IProps';
import { INode } from '../../Types/BaseTypes';

const Editor: FC<IEditor> = ({ page, setPage }) => {
	console.log('Editor :>> ');
	const [assignStyleId, setAssignStyleId] = useState<string>();
	const [node, setNode] = useState<INode>();

	// console.log('page :>> ', page);
	//   console.log("page.nodes :>> ", page.nodes);
	const nodeManager = new NodeManager(page, setPage);
	const { classes } = nodeManager;

	const onClick = assignStyleId
		? (selectedId: string) => nodeManager.updateNode(selectedId, 'styleId', assignStyleId)
		: (node: INode) => setNode(node);

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
