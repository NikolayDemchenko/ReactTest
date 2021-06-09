import { FC, ReactElement, useState } from 'react';

import { Input } from '../Model/Input';
import { MyElement } from '../Model/MyElement';
import { MyElementType } from '../Model/ValuesInterfacesAndTypes';

export const PreviewComponent: FC = () => {

  const [state, setstate] = useState()
	const spanEl: MyElementType = { id: '1', type: 'span', properties: {} };

	const inputEl: MyElementType = {
		id: '2',
		type: 'input',
		properties: { style: { width: '300px' } },
	};

	const flexContainerEl: MyElementType = {
		id: '3',
		type: 'div',
		properties: { style: { display: 'flex' } },
	};

	const formInput = new Input(flexContainerEl, spanEl, inputEl);

	const buttonEl = new MyElement({
		id: '4',
		type: 'button',
		properties: { key: 'submit' },
	}).withNodes(['Нажать!']);

	const form = new MyElement({
		id: '5',
		type: 'div',
		properties: { key: 'form' },
	}).withNodes([
		formInput.withName('Наименование организации',(e: {  target: {name: any, value: any } }) =>
    console.log(`name : ${e.target.name}, value : ${e.target.value}`),),
		formInput.withName('Адрес',(e: {  target: {name: any, value: any } }) =>
    console.log(`name : ${e.target.name}, value : ${e.target.value}`),),
		formInput.withName('Наименование организации2',(e: {  target: {name: any, value: any } }) =>
    console.log(`name : ${e.target.name}, value : ${e.target.value}`),),
	]);
	// (formInput.withName("Наименование организации").value().nodes![1] as MyElement).view({})
	const dataList = new MyElement({
		id: '6',
		type: 'div',
		properties: { style: { background: '#789' } },
	}).withNodes([form, buttonEl]);
  form.withNodes([
		formInput.withName('Наименование организации',(e: {  target: {name: any, value: any } }) =>
    console.log(`name : ${e.target.name}, value : ${e.target.value}`),),
		formInput.withName('Наименование организации2',(e: {  target: {name: any, value: any } }) =>
    console.log(`name : ${e.target.name}, value : ${e.target.value}`),),
	])


	// const [page, setPage] = useState<MyElement>(pageObj5);

	return dataList.view({});
};
