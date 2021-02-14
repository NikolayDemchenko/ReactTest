import React from 'react';
import { plus } from 'react-icons-kit/icomoon/plus';
import { cross } from 'react-icons-kit/icomoon/cross';
import Icon from 'react-icons-kit';
import SelectPanel from '../Inputs/ModalInput/SelectPanel/SelectPanel';
import htmlTagsVoid from 'html-tags/void';
function TagCRUDbtn({ parent = { id: null, tag: 'div' }, childrens, create, remove, elementList }) {
	// console.log('htmlTagsVoid :>> ', Array.isArray(htmlTagsVoid) );
	// console.log('htmlTags', htmlTags)
	return (
		<div style={{ display: 'flex' }}>
			{/* Добавление тега*/}
			{!htmlTagsVoid.find((tagVoid) => tagVoid === parent.tag) && (
				<SelectPanel
					items={elementList}
					selected={''}
					setItem={(item) => create(item, parent, childrens)}
					button={
						<div title={'create tag'} style={{ margin: '0 0.2em', cursor: 'pointer', width: '0.8em' }}>
							<Icon size={'100%'} icon={plus} />
						</div>
					}
				/>
			)}

			{/* Удаление */}
			<div
				title={'remove tag'}
				onClick={(e) => {
					e.stopPropagation();
					remove();
				}}
				style={{ margin: '0 0.2em', cursor: 'pointer', width: '0.8em' }}
			>
				<Icon size={'100%'} icon={cross} />
			</div>
		</div>
	);
}
export default TagCRUDbtn;
