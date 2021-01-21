import React, { useState } from 'react';
import Popover from '../Popover';
import { check } from 'react-icons-kit/iconic/check';
import Icon from 'react-icons-kit';

export default function CreateAppForm(props) {
	const Input = ({ title, name }) => {
		const [value, setValue] = useState();
		// console.log("value :>> ", value);

		return (
			<div style={{ display: 'flex' }}>
				<div style={{ margin: '0 0.4em ' }}>{title}</div>
				<input
					name={name}
					id={name}
					title={title}
					onChange={(e) => setValue(e.target.value)}
					autoFocus
					value={value}
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

	const Form = ({ setItem, close }) => {
		// const handleKeyPress = (e) => {
		//   if (e.key === "Enter") {
		//     // console.log("handleKeyPress");
		//     handleClick();
		//   }
		// };
		const getInputValueById = (id) => {
			const value = document.getElementById(id).value;
			return value ? value : null;
		};
		const getInputs = () => {
			const values = [];
			const inputs = document.getElementById('form').getElementsByTagName('input');
			for (let i = 0, len = inputs.length; i < len; ++i) {
				const { id, value, name, title } = inputs[i];
				values.push({ id, value, name, title });
			}
			return values;
		};
		const getPropsInInputs = (arr) => {
			const dataObject = {};
			arr.forEach(({ name, value }) => {
				dataObject[name] = value;
			});
			return dataObject;
		};

		// const input = { id, propName, title};

		const handleClick = () => {
			console.log('getPropsInInputs', getPropsInInputs(getInputs()));
			const domain = getInputValueById('domain');
			const name = getInputValueById('name');
			const appName = getInputValueById('appName');
			if (appName && domain && name) {
				// console.log("{appName,name,domain} :>> ", { appName, name, domain });
				setItem({
          // Дописать тут
					...getPropsInInputs(getInputs()),
					styles: [],
					nodes: [],
					bodyStyle: { background: 'inherit' },
				});
				close();
			}
		};

		return (
			<div
				id={'form'}
				style={{
					display: 'flex',
					flexDirection: 'column-reverse',
					background: '#3459',
				}}
			>
				<div
					onClick={(e) => {
						e.stopPropagation();
						handleClick();
					}}
					style={{
						margin: '0 0.6em 0 auto',
						cursor: 'pointer',
						width: '0.8em',
					}}
				>
					<Icon size={'100%'} icon={check} />
				</div>
				<Input {...{ title: 'domain', name: 'domain' }} />
				<Input {...{ title: 'page name', name: 'name' }} />
				<Input {...{ title: 'app name', name: 'appName' }} />
			</div>
		);
	};
	return (
		<Popover
			PaperProps={{
				style: {
					borderRadius: '0',
					background: 'transparent',
					// border: "1px solid #abc",
					color: 'rgba(140, 200, 255, 0.8)',

					overflow: 'visible',
				},
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'center',
			}}
			anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
		>
			<div style={{ cursor: 'pointer' }}>{props.children}</div>
			<Form {...props} />
		</Popover>
	);
}
