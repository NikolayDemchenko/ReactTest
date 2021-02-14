import React from 'react';
import PopupInputsForm from '../../Inputs/ModalInput/PopupInput/PopupInputsForm';
function SavePage({ page, pageId, createPage, savePage, children }) {
	// console.log('props', props)	
	return savePage && pageId ? (
		<div
			onClick={(e) => {
				e.stopPropagation();
				e.preventDefault();
				savePage(page);
			}}
		>
			{children}
		</div>
	) : (
		<PopupInputsForm
			setItem={(data) => createPage({...page, ...data })}
			inputs={[
				{ title: 'app name', name: 'appName' },
				{ title: 'domain', name: 'domain' },
				{ title: 'page name', name: 'name' },
			]}
			requredNames={['domain', 'name', 'appName']}
		>
			{children}
		</PopupInputsForm>
	);
}
export default SavePage;
