import React, { FC } from 'react';

export type TProperties = {
	[name: string]: string | number | boolean | null | TProperties;
};
// export interface INode {
//   properties?: TProperties;
//   nodes?: INode[];
//   nodesProperties?: TProperties;
// }

export type TData = string | number | boolean | null | TProperties;
export interface IVariable {
	name: string;
	value: TData | IVariable[];
}
export interface IFCItem {
	variable: IVariable;
	setItem: Function;
}

interface IList {
	type?: 'List';
	items: IVariable[];
}

export const instanceOfIList = (object: any): object is IList => {
	return object.type === 'List';
};

export const TreeViewCreator = (
	List: FC<{ properties?: TProperties }>,
	Item: FC<IFCItem>
): FC<{ list: IVariable[]; setList: Function }> => ({ list, setList }) => (
	<List>
		{list.map((variable, key) => {
			const setItem = (variable: TProperties) => {
				console.log('variable :>> ', variable);
				setList([...list, { ...variable }]);
			};

			const setItems = (items: IVariable[]) => {
				console.log(`items`, items);
				setList([...list, ...items]);
			};

			return (
				<div key={key}>
					{instanceOfIList(variable.value) ? (
						TreeViewCreator(List, Item)({ list: variable.value.items, setList: setItems })
					) : (
						<Item {...{ variable, setItem }} />
					)}
				</div>
			);
		})}
	</List>
);
