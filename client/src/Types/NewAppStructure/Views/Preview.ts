import { MyProperties } from '../Model/MyProperties';
import { MyChildren } from '../Model/MyChildren';
import { FC, useState } from 'react';
import { PageView } from './MyPageView';

export const PreviewComponent: FC = () => {

	const pageChildren = new MyChildren([
		'Текст в массиве',
		{ type: 'p', properties: {}, childs: ['Некий текст'] },
		{
			type: 'p',
			properties: { style: { color: 'red' } },
			childs: ['Красный текст'],
		},
	]);

	const pageProperties = new MyProperties({ style: { background: '#4587' } });

	pageChildren.add('Добавленный child');
	pageChildren.add({
		type: 'p',
		properties: { style: { color: 'red' } },
		childs: ['Красный текст'],
	});
	pageChildren.add({
		type: 'input',
		properties: { style: { color: 'red' }, placeholder: 'Введите красный текст' },
	});
	pageChildren.add({
		type: 'button',
		properties: { style: { color: 'red' }, title: 'Введите красный текст' },
		childs: [
			'Нажми сюда!',
			{
				type: 'p',
				properties: {
					onClick: () => {
						pageProperties.removeProperty('style');
						// console.log(`Арбайтен!!!!`,myPage);
					},
					style: { background: 'black', color: 'white' },
				},
				childs: [' текст'],
			},
		],
	});
	// myPage.removeByIndex(3);
	pageChildren.updateByIndex(2, {
		type: 'span',
		properties: { style: { color: 'blue' } },
		childs: ['Обновлённый Красный текст'],
	});

	const [page, setPage] = useState<any>({
		properties: {style:{ background: '#5587' }},
		childs: [
			'Текст в массиве',
			{ type: 'p', properties: {}, childs: ['Некий текст'] },
			{
				type: 'p',
				properties: { style: { color: 'red' } },
				childs: ['Красный текст'],
			},
			{
				type: 'input',
				properties: { style: { color: 'red' }, placeholder: 'Введите красный текст' },
			},
			{
				type: 'button',
				properties: { style: { color: 'red' }, title: 'Введите красный текст' },
				childs: [
					'Нажми сюда!',
					{
						type: 'p',
						properties: {
							onClick: () => {	
								console.log(`Арбайтен!!!!`);
							},
							style: { background: 'black', color: 'white' },
						},
						childs: [' текст'],
					},
				],
			},
		],
	});

	return PageView({ page });
};
