import React, { useContext } from 'react';
import { Context } from '../../../../AppFunction';
import { log, funcLog } from '../../../../Log';
import PageCRUDbtn from '../Pages/PageCRUDbtn';
import PopupInput from '../../Inputs/ModalInput/PopupInput/PopupInput';
import SelectPanel from '../../Inputs/ModalInput/SelectPanel/SelectPanel';
function Application({ selection, setSelection,pageList }) {
	const {
		state: { page},
		PageREST,
	} = useContext(Context);
	const { updateAppName, createPage, updatePage, getPagesByAppId } = PageREST;
	let background = 'rgba(30,40,57,.8)';
	let showButtons = false;
	const { appName, domain } = page;
	appName && selection === appName && (background = 'rgb(30,40,57)') && (showButtons = true);

	const containerStyle = {
		display: 'flex',
		borderBottom: '2px solid #55667766',
		background,
		cursor: 'default',
	};
	return (
		<div
			onClick={(e) => {
				e.stopPropagation();
				e.preventDefault();
				setSelection(appName);
			}}
		>
			<div style={containerStyle}>
				Application
				{showButtons && (
					<div style={{ margin: '0 4px 4px auto' }}>
						<PageCRUDbtn
							{...{
								create: (name) =>
									createPage({
										name,
										appName,
										domain,
										styles: [],
										nodes: [],
										bodyStyle: { background: 'inherit' },
									}),
								remove: () => {},
							}}
						/>
					</div>
				)}
			</div>
			<div style={containerStyle}>
				Name:
				<div style={{ padding: '0 8px' }} title={'application name'}>
					<PopupInput value={appName} setValue={(value) => updateAppName(appName, value)} />
				</div>
			</div>
			<div style={containerStyle}>
				Domain:
				<div style={{ padding: '0 8px' }} title={'domain'}>
					<PopupInput
						value={domain}
						setValue={(domain) => {
							updatePage({ ...page, domain });
						}}
					/>
				</div>
			</div>
			<div style={containerStyle}>
				Start page:
				<div style={{ padding: '0 8px' }} title={'start page'}>
					<SelectPanel
						closeAftSelect={true}
						// setItems={getAppList}
						items={pageList.map(page=>page.name)}
						selected={''}
						setItem={()=>{}}
						// setItem={getPagesByAppName}
						// button={
						// 	<div title={'Open'} className={buttonStyle}>
						// 		<Icon size={'100%'} icon={folderOpen} />
						// 	</div>
						// }
					/>
				</div>
			</div>
		</div>
	);
}
export default log(Application);
