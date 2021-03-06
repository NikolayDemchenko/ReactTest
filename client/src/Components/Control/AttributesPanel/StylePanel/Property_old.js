import React, { useState, useEffect } from 'react';
import { log } from '../../../../Log';
import Icon from 'react-icons-kit';
import { cross } from 'react-icons-kit/icomoon/cross';
import PopupInput from '../../Inputs/ModalInput/PopupInput/PopupInput';
import jss from 'jss';
function Property(props) {
	const {
		tabIndex,
		name,
		value,
		setName,
		setValue,
		removeProperty,
		onDrop,
		draggedProp,
		setDraggedProp,
		previewBase,
		node,
		panelStyle,
	} = props;
	// console.log("props :>> ", props);

	//#region setPreview
	const [partPreview, setPartPreview] = useState();
	const setPreview = (value) => {
		document.getElementById(node.id).className = jss
			.createStyleSheet({ className: { ...previewBase, [name]: value } })
			.attach().classes.className;
	};
	partPreview && setPreview(value);
	useEffect(() => {
		partPreview && setPreview(value);
		return () => {};
	}, [panelStyle]);

	const onEnter = () => setPartPreview(true);
	const onExit = () => {
		setPartPreview(false);
		setValue(value);
	};
	//#endregion

	const [Y, setY] = useState();
	const [target, setTarget] = useState();

	return (
		<div
			draggable
			tabIndex={tabIndex}
			onDrop={(e) => {
				e.stopPropagation();
				onDrop && onDrop({ [name]: value }, draggedProp, target);
			}}
			style={{
				// border: "1px solid #fff",
				display: 'grid',
				gridTemplateColumns: '60% 35% 1em',
				borderBottom: '2px solid #55667766',
				background: 'rgba(30,40,57,.4)',
			}}
			onDragStart={() => {
				// setDraggedProp(property);
				setDraggedProp({ [name]: value });
			}}
			onDragOver={(e) => {
				if (Y < e.pageY) {
					// console.log("Вниз");
					setTarget('down');
				} else if (Y > e.pageY) {
					// console.log("Вверх");
					setTarget('up');
				}
				setY(e.pageY);
			}}
		>
			<div
				title={'CSS свойство'}
				style={{
					padding: '0px 0.5em',
					// border: "1px solid #fff",
					// width: `${name.length / 2}em`,
				}}
			>
				<PopupInput
					{...{ onEnter, onExit }}
					value={name}
					setPreview={setName}
					setValue={(val) => {
						console.log('setName', val);
						setName(val);
					}}
				/>
			</div>
			<div
				title={value}
				style={{
					overflow: 'hidden',
					width: '80px',
				}}
			>
				<PopupInput {...{ value, setValue, setPreview, onEnter, onExit }} height="1em" />
			</div>
			<div
				title={'Удалить свойство'}
				style={{
					cursor: 'pointer',
					margin: '0 5px 0 auto',
				}}
				onClick={removeProperty}
			>
				<Icon size={'100%'} icon={cross} />
			</div>
		</div>
	);
}

// function areEqual(prevProps, nextProps) {
//   return prevProps.value === nextProps.value;
// }

// export default log(Property);
// export default React.memo(Property);
export default React.memo(log(Property));
// export default React.memo(log(Property), areEqual);
