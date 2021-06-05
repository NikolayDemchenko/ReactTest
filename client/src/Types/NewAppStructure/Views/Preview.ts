import { FC } from 'react';

import { MyElement } from '../Model/MyElement';
import { MyNodes } from '../Model/MyNodes';
import { MyProperties } from '../Model/MyProperties';

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


	// class TextElement implements IMyElement{
	// 	baseElement:MyElement	
	// 	text:string="Новый текст"
	// 	constructor(baseElement:MyElement,text:string) {
	// 	this.baseElement=baseElement
	// 	this.text=text
			
	// 	}
	// 	updateType=(type: string)=> this.baseElement.updateType(type)
	// 	value(): MyElementType {
	// 		return this.baseElement.value()
	// 	}

	// }

	const text = new MyElement({ type: 'span', properties: { } });
	
	const title = new MyElement(text.value(),["Наименование организации"]);

	const input = new MyElement({ type: 'input', properties: { style:{width:"300px"}} });

	const flexContainer = new MyElement({ type: 'div', properties: {style:{display:"flex"}} });
	const property = new MyElement(flexContainer.value(),[new MyElement(text.value(),["Наименование организации"]).value(),input.value()]);


	const form = new MyElement({ type: 'form', properties: { } },[property.value()]);
	const page = new MyElement({ type: 'div', properties: { style: { background: '#789' } } },[form.value()]);


	// const [page, setPage] = useState<MyElement>(pageObj5);

	return page.view({});
};
