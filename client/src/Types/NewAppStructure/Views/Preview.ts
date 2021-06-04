import { MyProperties } from '../Model/MyProperties';
import { MyNodes as MyNodes } from '../Model/MyNodes';
import { FC, useState } from 'react';
import { MyElement } from '../Model/MyElement';

export const PreviewComponent: FC = () => {
	const pageChildren = new MyNodes([
		'Текст в массиве',
		{ type: 'p', properties: {}, nodes: ['Некий текст'] },
		{
			type: 'p',
			properties: { style: { color: 'red' } },
			nodes: ['Красный текст'],
		},
	]);

	const pageProperties = new MyProperties({ style: { background: '#4587' } });

	pageChildren.add('Добавленный child');
	pageChildren.add({
		type: 'p',
		properties: { style: { color: 'red' } },
		nodes: ['Красный текст'],
	});
	pageChildren.add({
		type: 'input',
		properties: { style: { color: 'red' }, placeholder: 'Введите красный текст' },
	});
	pageChildren.add({
		type: 'button',
		properties: { style: { color: 'red' }, title: 'Введите красный текст' },
		nodes: [
			'Нажми сюда!',
			{
				type: 'p',
				properties: {
					onClick: () => {
						console.log(`Арбайтен!!!!`);
					},
					style: { background: 'black', color: 'white' },
				},
				nodes: [' текст'],
			},
		],
	});
	// myPage.removeByIndex(3);
	pageChildren.updateByIndex(2, {
		type: 'span',
		properties: { style: { color: 'blue' } },
		nodes: ['Обновлённый Красный текст'],
	});

	const pageChilds = new MyNodes([
		'Текст в массиве',
		{ type: 'p', properties: {}, nodes: ['Некий текст'] },
		{
			type: 'p',
			properties: { style: { color: 'red' } },
			nodes: ['Красный текст'],
		},
		{
			type: 'input',
			properties: { style: { color: 'red' }, placeholder: 'Введите красный текст' },
		},
		{
			type: 'button',
			properties: { style: { color: 'red' }, title: 'Введите красный текст' },
			nodes: [
				'Нажми сюда!',
				{
					type: 'p',
					properties: {
						onClick: () => {
							console.log(`Арбайтен!!!!`);
						},
						style: { background: 'black', color: 'white' },
					},
					nodes: [' текст'],
				},
			],
		},
	]);

	const pageObj = new MyElement({ type: 'div', properties: { style: { background: '#8587' } } });
	const pageObj2 = new MyElement({ type: pageObj.value().type, properties: pageProperties.value() });
	const pageObj3 = new MyElement(pageObj2.value(), pageChildren.value());
	const pageObj4 = new MyElement(pageObj3.value());

	const [page, setPage] = useState<MyElement>(pageObj4);

	return page.view({});
};
