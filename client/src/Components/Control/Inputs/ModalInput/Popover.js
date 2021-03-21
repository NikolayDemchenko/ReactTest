import React, { useState } from 'react';
import MuiPopover from '@material-ui/core/Popover';
function Popover(props) {
	const { children } = props;
	const { getItems } = children[1].props;
	const [anchorEl, setAnchorEl] = useState(null);
	const [items, _setItems] = useState(!getItems && children[1].props.items);

	// console.log('children[1].props', children[1].props);
	// console.log('items', items);

	const handleClick = (e) => {
		e.stopPropagation();
		setAnchorEl(e.currentTarget);
		getItems && getItems(_setItems);
	};
	const handleClose = () => {
		getItems &&_setItems();
		setAnchorEl();
	};

	const open = getItems ? (items ? Boolean(anchorEl) : false) : Boolean(anchorEl);

	const paper = {
		...children[1],
		props: { ...children[1].props, close: handleClose, items },
	};

	const id = open ? 'new-popover' : undefined;

	return (
		<>
			<div onClick={handleClick}>{children[0]}</div>
			<MuiPopover {...props} id={id} open={open} anchorEl={anchorEl} onClose={handleClose}>
				{paper}
			</MuiPopover>
		</>
	);
}
export default Popover;
