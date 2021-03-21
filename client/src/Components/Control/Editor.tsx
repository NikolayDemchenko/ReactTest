import React, { FC, useState } from 'react';
import PageComponent from '../View/Pages/Page';
import AttributesPanel from './AttributesPanel/AttributesPanel';
import { createTagManager, Context } from '../../AppFunction';
import { IEditor } from '../../Types/IProps';

const Editor: FC<IEditor> = ({ page, setPage }) => {
	console.log('Editor');
	const [assignStyleId, setAssignStyleId] = useState<string>();
	const [selectedId, setSelectedId] = useState<string>();

	console.log('page :>> ', page);
	//   console.log("page.nodes :>> ", page.nodes);
	const tagManager = createTagManager(page, setPage);
	const { updateTag, classes } = tagManager;

	const onClick = assignStyleId
		? (selectedId: string) => tagManager.updateTag(selectedId, 'styleId', assignStyleId)
		: (selectedId: string) => setSelectedId(selectedId);

	return (
		<Context.Provider
			value={{
				assignStyleId,
				setAssignStyleId,
			}}
		>
			{selectedId && <AttributesPanel {...{ setPage, page, selectedId, updateTag }} />}
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
