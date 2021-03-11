import React, { useState, useContext } from 'react';
import PageList from './Pages/PageList';
import jss from 'jss';
import preset from 'jss-preset-default';
import { Context } from '../../../AppFunction';
import { log, funcLog } from '../../../Log';
import PageCRUDbtn from './Pages/PageCRUDbtn';
import PopupInput from '../Inputs/ModalInput/PopupInput/PopupInput';
function NavigationPanel({ createPage, updatePage }) {
	const {
		state: { page },	
		PageREST,
	} = useContext(Context);
	const { updateAppName } = PageREST;
	const [selection, setSelection] = useState(page.name);
	// console.log('selection', selection);

	const style = {
		minWidth: '280px',
		maxWidth: '280px',
		maxHeight: '95vh',
		overflowY: 'auto',
		color: 'rgba(140, 200, 255, 0.8)',
		boxShadow: '2px 10px 5px 2px #00000055',
		'&::-webkit-scrollbar': { width: '20px' },
		'&::-webkit-scrollbar-thumb': { backgroundColor: '#567' },
	};
	jss.setup(preset());
	const { classes } = jss.createStyleSheet({ style }).attach();

	let background = 'rgba(30,40,57,.8)';
	let showButtons = false;
	const { appName, domain } = page;
	appName && selection === appName && (background = 'rgb(30,40,57)') && (showButtons = true);

	return (
		<div
			className={classes.style}
			onClick={(e) => {
				e.stopPropagation();
				e.preventDefault();
				setSelection(appName);
			}}
		>
			<div
				style={{
					display: 'flex',
					borderBottom: '2px solid #55667766',
					background,
					cursor: 'default',
				}}
			>
				Application:
				<div style={{ padding: '0 8px' }} title={'application name'}>
					<PopupInput value={appName} setValue={(value) => updateAppName(appName, value)} />
				</div>
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
			<div
				style={{
					display: 'flex',
					borderBottom: '2px solid #55667766',
					background,
					cursor: 'default',
				}}
			>
				Domain:
				<div style={{ padding: '0 8px' }} title={'application name'}>
					<PopupInput
						value={domain}
						setValue={(domain) => {
							updatePage({ ...page, domain });
						}}
					/>
				</div>
			</div>
			Pages: <PageList {...{ selection, setSelection, updatePage }} />
		</div>
	);
}
export default log(NavigationPanel);
// export default NavigationPanel;
