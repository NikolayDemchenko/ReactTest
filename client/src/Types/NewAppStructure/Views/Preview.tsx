import { MyProperties } from '../Model/MyProperties';
import { MyChildren } from '../Model/MyChildren';
import React, { FC, useState } from 'react';
import { PageView } from './MyPageView';

export const PreviewComponent: FC = () => {


	const pageChildren = new MyChildren([
		'Текст в массиве',
		{ type: 'p', properties: {}, children: ['Некий текст'] },
		{
			type: 'p',
			properties: { style: { color: 'red' } },
			children: ['Красный текст'],
		},
	]);

	const pageProperties = new MyProperties({ style: { background: '#4587' } });
	// pageProperties.updateProperty("style", { background: '#9587' })
	// pageProperties.removeProperty("style")
	// const myPage = new PageView(
	// 	{properties: {}, children:[
	// 		'Текст в массиве',
	// 		{ type: 'p', properties: {}, children: ['Некий текст'] },
	// 		{
	// 			type: 'p',
	// 			properties: { style: { color: 'red' } },
	// 			children: ['Красный текст'],
	// 		},
	// 	]}
	// );
	const myPage =  PageView({page:
		{properties: {}, children:[
			'Текст в массиве',
			{ type: 'p', properties: {}, children: ['Некий текст'] },
			{
				type: 'p',
				properties: { style: { color: 'red' } },
				children: ['Красный текст'],
			},
		]}
	});

	pageChildren.add('Добавленный child');
	pageChildren.add({
		type: 'p',
		properties: { style: { color: 'red' } },
		children: ['Красный текст'],
	});
	pageChildren.add({
		type: 'input',
		properties: { style: { color: 'red' }, placeholder: 'Введите красный текст' },
	});
	pageChildren.add({
		type: 'button',
		properties: { style: { color: 'red' }, title: 'Введите красный текст' },
		children: [
			'Нажми сюда!',
			{
				type: 'p',
				properties: {
					onClick: () => {
						pageProperties.removeProperty('style');
						setChange();
						// console.log(`Арбайтен!!!!`,myPage);
					},
					style: { background: 'black', color: 'white' },
				},
				children: [' текст'],
			},
		],
	});
	// myPage.removeByIndex(3);
	pageChildren.updateByIndex(2, {
		type: 'span',
		properties: { style: { color: 'blue' } },
		children: ['Обновлённый Красный текст'],
	});

	const [state, setState] = useState<any>(myPage);
	const setChange=()=>{
		setState(myPage);
		console.log(`Арбайтен!!!!`,myPage);
	}
	return (
		<>
			{/* {React.Children.map(state, (child) => {
				return React.cloneElement(child, {
					setstate,
				});
			})} */}
			{state.returnReactElement()}
		</>
	);
};


