import React, { FC } from 'react';
import { log, funcLog } from '../../../Log';
import jss from 'jss';
import preset from 'jss-preset-default';
import PopupInput from '../Inputs/ModalInput/PopupInput/PopupInput';
import { IBackSettings } from '../../../Types/IProps';

const BackSettings: FC<IBackSettings> = ({ setPage, page }) => {
	// console.log("props :>> ", props.page.bodyStyle);
	console.log('BackSettings :>> ');
	// console.log('page', page)
	const setPreview = (color: string) => {
		console.log('color', color);
		jss.setup(preset());
		const { classes } = jss.createStyleSheet({ style: { background: color } }).attach();
		const element = document.querySelector('body');
		element && element.classList.add(classes.style);
	};
	const setValue = (color: string) => {
		setPage({ ...page, bodyStyle: { background: color } });
	};
	return (
		<div
			title={page.bodyStyle['background']}
			style={{
				overflow: 'hidden',
				display: 'flex',
				margin: '0.5em 0',
				paddingLeft: '0.5em',
				background: 'rgba(30,40,57,.4)',
			}}
		>
			<div style={{ paddingRight: '2em' }}>Background</div>
			<PopupInput
				{...{
					value: page.bodyStyle['background'],
					setValue,
					setPreview,
				}}
				height="1em"
			/>
		</div>
	);
};
// export default React.memo(log(BackSettings));
export default BackSettings;
