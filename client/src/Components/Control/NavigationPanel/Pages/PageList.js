import React, { useContext } from 'react';
import { Context, TagManager } from '../../../../AppFunction';
import TagCRUDbtn from '../Tags/TagCRUDbtn';
import { tagList as elementList } from '../../../Class/HtmlCss';
import { TagList } from '../Tags/TagList';
import PopupInput from '../../Inputs/ModalInput/PopupInput/PopupInput';
function PageList(props) {
	// const { state } = useContext(Context);
	const {pageList} = props
	// const pageList = state && state.pageList ? state.pageList : [{ ...state.page }];

	return pageList.map((page, key) => {
		return <NavPage {...{...props, key, page }} />;
	});
}
function NavPage({ page, selection, setSelection, updatePage }) {
	// console.log('page :>> ', page);
	console.log('selection', selection);
	const { PageREST, state, setState } = useContext(Context);
	const { getPageById, removePage } = PageREST;
	const { createTag } = TagManager(state, setState);

	page = page._id === state.page._id ? state.page : page;

	let background = 'rgba(30,40,57,.8)';
	let showButtons = false;
	selection === page.name && (background = 'rgb(30,40,57)') && (showButtons = true);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<div
				onClick={(e) => {
					console.log('onClick');
					e.stopPropagation();
					e.preventDefault();
					setSelection(page.name);
					state.page._id !== page._id && getPageById(page._id);
				}}
				style={{
					display: 'flex',
					borderBottom: '2px solid #55667766',
					background,
					cursor: 'default',
				}}
			>
				<div title={'page name'}>
					{' '}
					<PopupInput
						value={page.name}
						setValue={(name) => {
							updatePage({ ...page, name });
						}}
					/>
				</div>
				{showButtons && (
					<div style={{ margin: '0 4px 4px auto' }}>
						<TagCRUDbtn {...{ create: createTag, remove: () => removePage(page), elementList }} />
					</div>
				)}
			</div>
			<div style={{ marginLeft: '12px' }}>
				{state.page.name === page.name && page.nodes && <TagList {...{ selection, setSelection, page }} />}
			</div>
		</div>
	);
}

export default PageList;
