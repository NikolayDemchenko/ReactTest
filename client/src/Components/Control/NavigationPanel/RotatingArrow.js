import React from 'react';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import Icon from 'react-icons-kit';

function RotatingArrow({ show }) {
	const _icon = <Icon size={'100%'} icon={ic_keyboard_arrow_right} />;
	return !show ? <div>{_icon}</div> : <div style={{ transform: 'rotate(90deg)' }}>{_icon}</div>;
}
export default RotatingArrow