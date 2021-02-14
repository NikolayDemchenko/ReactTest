import React from 'react';
import { plus } from 'react-icons-kit/icomoon/plus';
import { cross } from 'react-icons-kit/icomoon/cross';
import Icon from 'react-icons-kit';
import PopupInputsForm from '../Inputs/ModalInput/PopupInput/PopupInputsForm';
function PageCRUDbtn({ create }) {
	// console.log('htmlTagsVoid :>> ', Array.isArray(htmlTagsVoid) );
	// console.log('htmlTags', htmlTags)

	//  Добавление страницы
	return (
		<PopupInputsForm
			setItem={({ name }) => create(name)}
			inputs={[{ title: 'page name', name: 'name' }]}
			requredNames={['name']}
		>
			<div title={'create page'} style={{ margin: '0 0.2em', cursor: 'pointer', width: '0.8em' }}>
				<Icon size={'100%'} icon={plus} />
			</div>
		</PopupInputsForm>
	);
}
export default PageCRUDbtn;
