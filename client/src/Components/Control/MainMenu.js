import React, { useState, useContext, useEffect } from 'react';
import PopupInputsForm from './Inputs/ModalInput/PopupInput/PopupInputsForm';
import SelectPanel from './Inputs/ModalInput/SelectPanel/SelectPanel';
import { fileTextO } from 'react-icons-kit/fa/fileTextO';
import { save } from 'react-icons-kit/fa/save';
import { map } from 'react-icons-kit/icomoon/map';
import { folderOpen } from 'react-icons-kit/icomoon/folderOpen';
import Icon from 'react-icons-kit';
import SavePage from './NavigationPanel/Pages/SavePage';
import { Context } from '../../AppFunction';
import { log, funcLog } from '../../Log';
import { buttonStyle } from './Styles/BtnStyle';
import NavigationPanel from './NavigationPanel/NavigationPanel';
function MainMenu() {
	const { state, PageREST } = useContext(Context);
	const { page } = state;
	const { createPage, getPagesByAppName, updatePage, getAppList } = PageREST;

	const [show, setShow] = useState(false);

	return (
		<div
			style={{
				position: 'fixed',
				top: 0,
				zIndex: 999,
				backgroundColor: 'rgba(30,40,57,.6)',
				color: 'rgba(140, 200, 255, 0.8)',
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
			}}
		>
			<div
				style={{
					display: 'flex',
					backgroundColor: 'rgba(30,40,57,.8)',
					marginBottom: '2px',
					paddingBottom: '2px',
				}}
			>
				<SelectPanel
					closeAftSelect={true}
					setItems={getAppList}
					selected={''}
					setItem={getPagesByAppName}
					button={
						<div title={'Open'} className={buttonStyle}>
							<Icon size={'100%'} icon={folderOpen} />
						</div>
					}
				/>

				<PopupInputsForm
					setItem={(data) =>
						createPage({
							...data,
							nodes: [],
							styles: [],
							bodyStyle: { background: 'inherit' },
						})
					}
					inputs={[
						{ title: 'app name', name: 'appName' },
						{ title: 'domain', name: 'domain' },
						{ title: 'page name', name: 'name' },
					]}
					requredNames={['domain', 'name', 'appName']}
				>
					<div title={'Create new application'} className={buttonStyle}>
						<Icon size={'100%'} icon={fileTextO} />
					</div>
				</PopupInputsForm>
				{page && (
					<div
						className={buttonStyle}
						style={{ color: show && '#ffa' }}
						onClick={(e) => {
							e.stopPropagation();
							console.log('setShowPanel');
							setShow(!show);
						}}
					>
						<Icon size={'100%'} icon={map} />
					</div>
				)}
				{page && (
					<SavePage {...{ createPage, page, savePage: updatePage, pageId: page._id }}>
						<div title={'Save'} className={buttonStyle}>
							<Icon size={'100%'} icon={save} />
						</div>
					</SavePage>
				)}
			</div>
			{show && <NavigationPanel {...{ createPage, updatePage }} />}
		</div>
	);
}
export default log(MainMenu);
