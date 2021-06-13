import React, { Dispatch, FC, JSXElementConstructor, ReactElement, SetStateAction, useEffect, useState } from 'react';
import { RESTManager } from '../../../Function/ServiceFunction/REST/RESTManager';

export const Contacts: FC = () => {
	return (
		<Table name={'person'}>
			<Property name={'Имя'} />
			<Property name={'Полное имя'} />
			<Property name={'Телефон'} />
			<Property name={'Адрес'} />
			<Property name={'Имя2'} />
			<Property name={'Полное имя2'} />
			<Property name={'Телефон2'} />
			<Property name={'Адрес2'} />
		</Table>
	);
};

export const Table: FC<{ name: string }> = ({ name, children }) => {
	const [createdObject, createObject] = useState<{ [key: string]: string }>({});
	const [selectedInstance, selectInstance] = useState<{ [key: string]: string }>();
	const [instances, setInstances] = useState<{ [key: string]: string }[]>([]);

	const { getCollection, createDoc, updateDoc, removeDocById } = RESTManager(name);

	const getInstances = () => getCollection().then((instances) => setInstances(instances));
	const createInstance = () => {
		createDoc(createdObject).then(() => getInstances());
		createObject({});
	};
	const removeInstance = selectedInstance && (() => removeDocById(selectedInstance._id).then(() => getInstances()));
	const updateInstance = () => updateDoc(selectedInstance).then(() => getInstances());

	useEffect(() => {
		getInstances();
		return () => {};
	}, []);
	// console.log('createdObject', createdObject);
	// console.log('instances', instances);
	console.log('selectedObject', selectedInstance);
	return (
		<div>
			<Form {...{ createObject, createdObject }}>{children}</Form>
			<button onClick={createInstance}>Добавить запись</button>
			{selectedInstance && <button onClick={removeInstance}>Удалить запись</button>}
			<Instances {...{ instances, selectInstance, selectedInstance, updateInstance, children }} />
		</div>
	);
};



export const Form: FC<{
	createdObject: { [key: string]: string };
	createObject: (
		value: React.SetStateAction<{
			[key: string]: string;
		}>
	) => void;
}> = ({ createObject, createdObject, children }) => {
	const setValue = (property: { name: string; value: string }) => {
		createObject((object) => {
			const _object = { ...object };
			_object[property.name] = property.value;
			return { ..._object };
		});
	};
	return (
		<div>
			{React.Children.map(children, (_child) => {
				const child = _child as ReactElement<any, string | JSXElementConstructor<any>>;
				const name = child.props.name;
				return React.cloneElement(child, {
					setValue,
					value: createdObject[name],
				});
			})}
		</div>
	);
};


const FilterInstances=(searchObject: { [key: string]: string },instances: { [key: string]: string }[])=>{
	// Поиск по подстроке и сортировка по позиции подстроки
	Object.keys(searchObject).forEach(key=>{
		const value=searchObject[key]
		instances=instances.filter((instance) => instance[key].includes(value)).sort((a, b) => a[key].indexOf(value) - b[key].indexOf(value));
	})
	return instances
}


export const Instances: FC<{
	instances: { [key: string]: string }[];
	selectedInstance?: { [key: string]: string };
	selectInstance: Dispatch<SetStateAction<{ [key: string]: string } | undefined>>;
	updateInstance: () => Promise<void>;
}> = ({ selectInstance, selectedInstance, instances, updateInstance, children }) => {
	const [editInstanceId, setEditInstanceId] = useState<string>('');
	return (
		<div>
			{instances.map((instance) => {
				return editInstanceId === instance._id ? (
					selectedInstance && (
						<EditableInstance
							{...{
								key: instance._id,
								selectInstance,
								selectedInstance,
								updateInstance,
								setEditInstanceId,
								children,
							}}
						/>
					)
				) : (
					<Instance
						{...{
							instance,
							key: instance._id,
							selectInstance,
							selectedInstance,
							setEditInstanceId,
							children,
						}}
					/>
				);
			})}
		</div>
	);
};

export const Instance: FC<{
	selectedInstance?: { [key: string]: string };
	instance: { [key: string]: string };
	selectInstance: Dispatch<SetStateAction<{ [key: string]: string } | undefined>>;
	setEditInstanceId: (value: React.SetStateAction<string>) => void;
}> = ({ selectInstance, selectedInstance, instance, setEditInstanceId, children }) => {
	const isSelected = selectedInstance === instance;
	const style = (isSelected && { outline: '1px black solid ' }) || {};
	return (
		<div
			style={style}
			onClick={() => {
				selectInstance(instance);
				setEditInstanceId('');
			}}
		>
			{isSelected && (
				<button
					onClick={(e) => {
						e.stopPropagation();
						setEditInstanceId(instance._id);
					}}
				>
					Редактировать
				</button>
			)}
			{React.Children.map(children, (_child) => {
				const child = _child as ReactElement<any, string | JSXElementConstructor<any>>;
				const name = child.props.name;
				return instance[name] && <InstanceProperty {...{ key: name, name, value: instance[name] }} />;
			})}
		</div>
	);
};

export const EditableInstance: FC<{
	selectedInstance: { [key: string]: string };
	selectInstance: Dispatch<SetStateAction<{ [key: string]: string } | undefined>>;
	updateInstance: () => Promise<void>;
	setEditInstanceId: (value: React.SetStateAction<string>) => void;
}> = ({ selectInstance, selectedInstance, updateInstance, setEditInstanceId, children }) => {
	const setValue = (property: { name: string; value: string }) => {
		selectInstance((_object) => {
			const object = { ..._object };
			object[property.name] = property.value;
			if (property.value === '') {
				delete object[property.name];
				// console.log(`object[property.name]`, object);
			}
			return { ...object };
		});
	};

	const style = { outline: '1px black solid ' };
	return (
		<div style={style}>
			{React.Children.map(children, (_child) => {
				const child = _child as ReactElement<any, string | JSXElementConstructor<any>>;
				const name = child.props.name;
				return React.cloneElement(child, {
					setValue,
					value: selectedInstance[name],
				});
			})}

			{
				<button
					onClick={(e) => {
						e.stopPropagation();
						updateInstance();
						setEditInstanceId('');
					}}
				>
					Применить
				</button>
			}
		</div>
	);
};

export const Property: FC<{ setValue?: Function; name: string; value?: string }> = ({ name, value = '', setValue }) => {
	return (
		<div>
			<div>{name}</div>
			<input
				value={value}
				onChange={(e) => {
					setValue && setValue({ name, value: e.target.value });
				}}
			/>
		</div>
	);
};

export const InstanceProperty: FC<{ name: string; value: string }> = ({ name, value }) => {
	return (
		<div>
			<div>{name}</div> <div>{value}</div>
		</div>
	);
};
