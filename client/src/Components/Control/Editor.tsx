import React, { FC, useContext, useState, ReactElement } from 'react';
import PageComponent from '../View/Pages/Page';
import AttributesPanel from './AttributesPanel/AttributesPanel';
import { createTagManager, Context } from '../../AppFunction';

const Editor: FC = () => {
	const { PageREST, page, setPage } = useContext(Context);
	console.log('Editor');
	const [assignStyleId, setAssignStyleId] = useState<string>();
	const [selectedId, setSelectedId] = useState<string>();

	if (PageREST && page && setPage) {
		console.log('page :>> ', page);
		//   console.log("page.nodes :>> ", page.nodes);
		const tag = createTagManager(page, setPage);
		const { updateTag, classes } = tag;
		const node = page.nodes.find(({ id }) => selectedId === id);
		const nodeStyle = node && page.styles.find(({ id }) => id === node.styleId);
		const onClick = assignStyleId
			? (selectedId: string) => tag.updateTag(selectedId, 'styleId', assignStyleId)
			: (selectedId: string) => setSelectedId(selectedId);

		return (
			<Context.Provider
				value={{
					PageREST,
					page,
					setPage,
					node,
					updateTag,
					nodeStyle,
					assignStyleId,
					setAssignStyleId,
				}}
			>
				{selectedId && <AttributesPanel />}
				<PageComponent
					{...{
						bodyStyle: page.bodyStyle,
						selectedId,
						onClick,
						classes,
					}}
				/>
			</Context.Provider>
		);
	} else {
		return <></>;
	}
};

export default Editor;
