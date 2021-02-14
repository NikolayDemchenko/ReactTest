import React, { useState, useContext, useEffect } from 'react';
import PageList from './Pages/PageList';
import jss from 'jss';
import { fileTextO } from 'react-icons-kit/fa/fileTextO';
import { save } from 'react-icons-kit/fa/save';
import { map } from 'react-icons-kit/icomoon/map';
import { folderOpen } from 'react-icons-kit/icomoon/folderOpen';
import { navicon } from 'react-icons-kit/fa/navicon';
import Icon from 'react-icons-kit';
import preset from 'jss-preset-default';
import SavePage from './Pages/SavePage';
import { NavigationContext } from '../../../AppFunction';
import RotatingArrow from './RotatingArrow';
import { log, funcLog } from '../../../Log';
import { buttonStyle } from '../Styles/BtnStyle';
import PageCRUDbtn from './PageCRUDbtn';
function NavigationPanel({ createNewPage }) {
	const { state } = useContext(NavigationContext);
	const [selection, setSelection] = useState();
	console.log('selection', selection);
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
	const { classes } = jss
		.createStyleSheet({
			style,
		})
		.attach();

	let background = 'rgba(30,40,57,.8)';
	let showButtons = false;

	selection === state.page.appName && (background = 'rgb(30,40,57)') && (showButtons = true);

	return (
		<div
			className={classes.style}
			onClick={(e) => {
				e.stopPropagation();
				e.preventDefault();
				setSelection(state.page.appName);
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
				<div
					style={{
						padding: '0 8px',
					}}
					title={'application name'}
				>
					{state.page.appName}
				</div>
				{showButtons && (
					<div style={{ margin: '0 4px 4px auto' }}>
						<PageCRUDbtn
							{...{
								create: (name) =>
									createNewPage({
										name,
										appName: state.page.appName,
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
			<PageList {...{ selection, setSelection }} />
		</div>
	);
}
export default log(NavigationPanel);
// export default NavigationPanel;
