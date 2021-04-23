import React, { FC } from 'react';

import {
  TJsArr,
  TJsObj,
} from './';

export const BaseString = (value: string): FC => () => {
	return (
		<div title={'string'}>
			{'Строка: '}
			{value}
		</div>
	);
};
export const BaseNumber = (value: number): FC => () => {
	return (
		<div title={'number'}>
			{'Число: '}
			{value}
		</div>
	);
};
export const BaseBoolean = (value: boolean): FC => () => {
	return <input title={'boolean'} type={'checkbox'} checked={value} />;
};

export const BaseArray = (switcher: Function, value: TJsArr): FC => () => {
	return (
		<>
			{'Массив: '}
			{value.map((item, index) => {
				const Value = switcher(item);
				return (
					<div key={index}>
						<Value />
					</div>
				);
			})}
		</>
	);
};
// Сделать для объекта подкомпонет Row объединяющий имя и значение
export const BaseObject = (switcher: Function, value: TJsObj): FC => () => {
	console.log('Объект :>> ', value);
	return (
		<>
			{'Объект: '}
			{Object.keys(value).map((item, index) => {
				const Name = switcher(item);
				const Value = switcher(value[item]);
				return (
					<div key={index}>
						<Name />
						<Value />
					</div>
				);
			})}
		</>
	);
};
