import React, { useState, useContext } from 'react';
import { TagList } from './Tags/TagList';
import AppList from './Apps/AppList';
import PageList from './Pages/PageList';
import PopupInputsForm from '../Inputs/ModalInput/PopupInput/PopupInputsForm';
import jss from 'jss';
import preset from 'jss-preset-default';
import SavePage from './Pages/SavePage';
import { Context } from '../../../AppFunction';

function NavigationPanel(props) {
	const {
		page,
		RESTManager: { createPage, updatePage },
	} = useContext(Context);

	// console.log('props', props)
	const style = {
		// flexWrap: "wrap",
		minWidth: '280px',
		maxWidth: '280px',
		maxHeight: '95vh',
		overflowY: 'auto',
		// fontSize:"16px",
		position: 'fixed',
		top: '20px',
		left: 0,
		zIndex: 999,
		backgroundColor: '#456',
		color: 'rgba(140, 200, 255, 0.8)',
		boxShadow: '2px 10px 5px 2px #00000055',
		'&::-webkit-scrollbar': { width: '20px' },
		'&::-webkit-scrollbar-thumb': { backgroundColor: '#567' },
	};
	jss.setup(preset());
	const { classes } = jss
		.createStyleSheet({
			style,
		})
		.attach();

	const [showPanel, setShowPanel] = useState(false);

	return (
		<div
			style={{
				position: 'fixed',
				top: 0,
				zIndex: 999,
				backgroundColor: '#456c',
				display: 'flex',
				justifyContent: 'center',
				padding: '0 10px',
				cursor: 'pointer',
			}}
		>
			<div
				onClick={(e) => {
					e.stopPropagation();
					console.log('setShowPanel');
					setShowPanel(!showPanel);
				}}
			>
				Navigation
			</div>

			<SavePage savePage={updatePage} createPage={createPage} title={'Save'} pageId={page._id} />

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
					New App
				</div>
			</PopupInputsForm>
			{showPanel && (
				<div className={classes.style}>
					{'Application'}
					<AppList />
					{'Pages'}
					<PageList />
					{'Tags'}
					<TagList />
				</div>
			)}
		</div>
	);
}
export default NavigationPanel;
