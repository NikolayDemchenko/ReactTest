import React from 'react';
import { log } from '../../../Log';
const NamedInput = ({ title, name, index }) => {
	return (
		<div style={{ display: 'flex' }}>
			<div style={{ margin: '0 0.4em ' }}>{title}</div>
			<input
				{...{ name, title, autoFocus: index === 0 && 'autoFocus' }}
				style={{
					margin: '0.2em 0.2em 0 auto',
					background: 'rgba(30,40,57,.9)',
					color: '#fff',
					fontSize: '16px',
					padding: '0 8px',
					outline: 'none',
					border: 0,
				}}
			/>
		</div>
	);
};
export default log(NamedInput);