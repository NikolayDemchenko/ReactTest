import React from 'react';

function randomColor(length: number) {
	let red = length > 5 ? length / 40 : length / 6;
	let grin = length > 5 ? length / 25 : length / 40;
	let blue = length > 5 ? length / 15 : length / 10;

	var r = Math.floor(red * 256),
		g = Math.floor(grin * 256),
		b = Math.floor(blue * 256);
	return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

const log = <C extends {}>(BaseComponent: React.FC<C>) => (props: any) => {
	// console.log(
	//   `%cRendering ${BaseComponent.name}`,
	//   `color: ${randomColor(BaseComponent.name.length)}`
	// );
	return <BaseComponent {...props} />;
};

const funcLog = (funcName: string) => console.log(`%cRendering ${funcName}`, `color: ${randomColor(funcName.length)}`);
export { log, funcLog };
// Сделать сохранение стилей в базу и подгрузку в библиотеку стилей
// Добавить возможность создания текста
// Добавить возможность перетаскивания тегов
