import React, { FC, useContext, useState } from 'react';
import PageComponent from '../View/Pages/Page';
import AttributesPanel from './AttributesPanel/AttributesPanel';
import { TagManager, Context } from '../../AppFunction';
import { Page, AppContext } from '../../Types/BaseTypes';

type Props = {
	page: Page;
	setPage: React.Dispatch<React.SetStateAction<Page>>;
	PageREST: object;
};
const Editor: FC<Props> = ({ page, setPage}) => {
	const { PageREST } = useContext(Context);
	console.log('Editor');

	// console.log('nodeStyle', nodeStyle)
	// console.log('node :>> ', node);
	console.log('page :>> ', page);
	//   console.log("page.nodes :>> ", page.nodes);
	const { updateTag, classes } = TagManager(page, setPage);
	const [assignStyleId, setAssignStyleId] = useState<string>();
	const [selectedId, setSelectedId] = useState<string>();
	const node = page.nodes.find(({ id }) => selectedId === id);
	const nodeStyle = node && page.styles.find(({ id }) => id === node.styleId);
	const onClick = assignStyleId
		? (selectedId: string) => updateTag(selectedId, 'styleId', assignStyleId)
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
			{node && <AttributesPanel />}
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
};

export default Editor;
