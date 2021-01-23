import React from 'react';
import PopupInputsForm from '../../Inputs/ModalInput/PopupInput/PopupInputsForm';
function SavePage({ pageId, createPage, savePage, title }) {
	// console.log('props', props)

	return (
		<div>
			{savePage && pageId ? (
				<div
					style={{
						backgroundColor: '#456c',
						justifyContent: 'center',
						padding: '0 10px',
						cursor: 'pointer',
					}}
					onClick={(e) => {
						// e.stopPropagation();
						e.preventDefault();
						savePage();
					}}
				>
					{title}
				</div>
			) : (
				<PopupInputsForm
					setItem={createPage}
					inputs={[
						{ title: 'app name', name: 'appName' },
						{ title: 'domain', name: 'domain' },
						{ title: 'page name', name: 'name' },
          ]}
          requredNames={['domain', 'name', 'appName']}
				>
					<div
						style={{
							backgroundColor: '#456c',
							justifyContent: 'center',
							padding: '0 10px',
							cursor: 'pointer',
						}}
					>
						{title}
					</div>
				</PopupInputsForm>
			)}
		</div>
	);
}
export default SavePage;
