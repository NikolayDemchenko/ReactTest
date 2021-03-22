import React, { FC, useState } from 'react';
import PageComponent from '../View/Pages/Page';
import AttributesPanel from './AttributesPanel/AttributesPanel';
import { createNodeManager, Context } from '../../AppFunction';
import { IEditor } from '../../Types/IProps';

const Editor: FC<IEditor> = ({ page, setPage }) => {
	console.log('Editor');
	const [assignStyleId, setAssignStyleId] = useState<string>();
	const [selectedId, setSelectedId] = useState<string>();

	console.log('page :>> ', page);
	//   console.log("page.nodes :>> ", page.nodes);
	const nodeManager = createNodeManager(page, setPage);
	const { updateNode, classes } = nodeManager;

	const onClick = assignStyleId
		? (selectedId: string) => nodeManager.updateNode(selectedId, 'styleId', assignStyleId)
		: (selectedId: string) => setSelectedId(selectedId);

	return (
		<Context.Provider
			value={{
				assignStyleId,
				setAssignStyleId,
			}}
		>
			{selectedId && <AttributesPanel {...{ setPage, page, selectedId, updateNode }} />}
			<PageComponent
				{...{
					page,
					selectedId,
					onClick,
					classes,
				}}
			/>
		</Context.Provider>
	);
};

export default Editor;
