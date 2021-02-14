import React, { useContext, useState } from 'react';
import { NavigationContext, TagManager } from '../../../../AppFunction';
import TagCRUDbtn from '../TagCRUDbtn';
import { tagList as elementList } from '../../../Class/HtmlCss';
import { TagList } from '../Tags/TagList';
import RotatingArrow from '../RotatingArrow';
function NavPages({ selection, setSelection }) {
	const { state } = useContext(NavigationContext);
	const pageList = state && state.pageList ? state.pageList : [{ name: state.page.name }];
	console.log('pageList', pageList);
	return pageList.map((page, index) => {
		return <NavPage pageList={pageList} key={index} page={page} {...{ selection, setSelection }} />;
	});
}
function NavPage({ page, pageList, selection, setSelection }) {
	const { RESTManager, state, setState } = useContext(NavigationContext);
	const { createTag } = TagManager(state, setState);
	const [show, setShow] = useState(false);
	const toggle =
		state.page.nodes.length > 0 ? (
			<div
				style={{ cursor: 'pointer', width: '20px' }}
				onClick={(e) => {
					e.stopPropagation();
					setShow(!show);
				}}
			>
				<RotatingArrow {...{ show }} />
			</div>
		) : (
			<div style={{ width: '20px' }} />
		);

	const remove = () => {
		RESTManager.removePageById(page._id);
		RESTManager.getPageById(pageList[0]._id);
	};
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
					setSelection(state.page.name);
					state.page._id !== page._id && RESTManager.getPageById(page._id);
					// console.log("id :>> ", id);
				}}
				style={{
					display: 'flex',
					borderBottom: '2px solid #55667766',
					background,
					cursor: 'default',			
				}}
			>
				{toggle}
				<div title={'page name'}>{page.name}</div>
				{showButtons && (
					<div style={{ margin: '0 4px 4px auto' }}>
						<TagCRUDbtn {...{ create: createTag, remove, elementList }} />
					</div>
				)}
			</div>
			<div style={{ marginLeft: '12px' }}>{show && <TagList {...{ selection, setSelection }} />}</div>
		</div>
	);
}

export default NavPages;
