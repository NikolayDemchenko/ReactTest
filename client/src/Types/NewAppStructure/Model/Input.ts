import { MyElement } from './MyElement';
import { MyElementType } from './ValuesInterfacesAndTypes';

export class Input {
	container: MyElementType;
	title: MyElementType;
	input: MyElementType;
	constructor(container: MyElementType, title: MyElementType, input: MyElementType) {
		this.container = container;
		this.title = title;
		this.input = input;
	}
	withName = (name: string,onChange:Function) => {
		const container = new MyElement({
			...this.container,
			properties: { ...this.container.properties, key: name },
		});
		const title = new MyElement({
			...this.title,
			properties: { ...this.title.properties, key: 'title' },
		}).withNodes([name]);
		const input = new MyElement({
			...this.input,
			properties: {
				...this.input.properties,
				name,
				key: 'input',
				onChange 
			},
		});
		return container.withNodes([title, input]);
	};
}

// export class InputElement {
//   element: MyElement
// 	constructor(element: MyElement) {
//     this.element=element
// 	}
// 	targetValue = () => {
//     this.element.value().nodes
// 	};

// }
