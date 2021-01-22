import React from 'react';
import Popover from '../Popover';
import { check } from 'react-icons-kit/iconic/check';
import Icon from 'react-icons-kit';
import { log } from '../../../../Log';
import shortid from 'shortid';
function PopupInputsForm(props) {
	const Form = ({ setItem, inputs, requredNames, button, close }) => {
		const Input = ({ title, name, index }) => {
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
		const containerId = shortid.generate();
		const getElementsPropsByСontainerId = (id, props = []) => {
			// Выбирает в указанном по id HTML элементе все инпуты и возвращает массив объектов с запрошенными свойствами (props) инпутов 
			const elements = [];
			[...document.getElementById(id).getElementsByTagName('input')].forEach((input) => {
				const element = {};
				props.forEach((prop) => {
					element[prop] = input[prop];
				});
				elements.push(element);
			});
			return elements;
		};

		const convertInputsToObject = (inputs) => {
			// Преобразует массив в объект с свойствами
			const object = {};
			inputs.forEach(({ name, value }) => {
				if (value) object[name] = value;
			});
			return object;
		};

		const checkingProps = (propNames, object) => {
			// Проверяет наличие всех заданных имен свойств в объекте
			let bool = true;
			propNames.forEach((propName) => {
				if (!object.hasOwnProperty(propName)) {
					bool = false;
				}
			});
			return bool;
		};

		const handleClick = () => {
			const attributes = getElementsPropsByСontainerId(containerId, ['value', 'name']);
			const props = convertInputsToObject(attributes);
			if (checkingProps(requredNames, props)) {
				setItem({
					...props,
					nodes: [],
					bodyStyle: { background: 'inherit' },
				});
				close && close();
			}
		};

		return (
			<div
				id={containerId}
				style={{
					display: 'flex',
					flexDirection: 'column',
					background: '#3459',
				}}
			>
				{inputs.map((input, key) => (
					<Input key={key} {...input} index={key} />
				))}
				<div
					onClick={(e) => {
						e.stopPropagation();
						handleClick();
					}}
				>
					{button ? (
						button
					) : (
						<div
							style={{
								margin: '0 0.6em 0 auto',
								cursor: 'pointer',
								width: '0.8em',
							}}
						>
							<Icon size={'100%'} icon={check} />
						</div>
					)}
				</div>
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
			<div>{props.children}</div>
			<Form {...props} />
		</Popover>
	);
}
export default log(PopupInputsForm);
