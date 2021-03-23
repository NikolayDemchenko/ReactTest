import React, { useState, useEffect, FC } from 'react';
import PropertyInputSwitch from '../Switch/PropertyInputSwitch';
import { IPaper } from '../../../../../Types/IProps';
const Paper: FC<IPaper> = (props) => {
	const { setValue, setPreview } = props;
	const [value, setThisValue] = useState<string>(props.value);

	console.log('Paper :>> ');

	useEffect(() => {
		setThisValue(props.value);
		return () => {};
	}, [props.value]);

	const handleKeyPress = (e: { key: string }) => {
		if (e.key === 'Enter') {
			console.log('handleKeyPress');
			console.log('value :>> ', value);
			setPreview && setPreview(value);
			setValue(value ? value : props.value);
		}
	};

	return (
		<div style={{ color: '#eee', width: '100%' }}>
			<input
				style={{
					background: 'transparent',
					width: '100%',
					minWidth: '80px',
					paddingLeft: '4px',
					outline: 'none',
					border: 0,
					color: '#eee',
					fontSize: '15px',
				}}
				onKeyPress={handleKeyPress}
				onBlur={() => {
					setValue(value ? value : props.value);
					// props.setValue(e.target.value);
				}}
				value={value}
				onChange={(e) => {
					console.log('e.target.value', e.target.value);
					setThisValue(e.target.value);
				}}
			/>
			<div
				style={{
					backgroundColor: '#234c',
					// width: "100px",
				}}
			>
				<PropertyInputSwitch {...{ ...props, value }} />
			</div>
		</div>
	);
};
export default Paper;
