import React, { Dispatch, FC, JSXElementConstructor, ReactElement, SetStateAction, useEffect, useState } from 'react';
import { RESTManager } from '../../../Function/ServiceFunction/REST/RESTManager';

export const Contacts: FC = () => {
	return (
		<Table name={'people'}>
			<NamedInput name={'Имя'} />
			<NamedInput name={'Полное имя'} />
			<NamedInput name={'Телефон'} />
			<NamedInput name={'Адрес'} />
			<NamedInput name={'Имя2'} />
			<NamedInput name={'Полное имя2'} />
			<NamedInput name={'Телефон2'} />
			<NamedInput name={'Адрес2'} />
		</Table>
	);
};

export const Table: FC<{ name: string }> = ({ name, children }) => {
	const [createdObject, createObject] = useState<{ [key: string]: string }>({});
	const [selectedObject, selectObject] = useState<{ [key: string]: string }>();
	const [instances, setInstances] = useState<{ [key: string]: string }[]>([]);

	const { getCollection, createDoc, updateDoc, removeDocById } = RESTManager(name);

	const getInstances = () => getCollection().then((instances) => setInstances(instances));
	const createInstance = () => createDoc(createdObject).then(() => getInstances());
	const removeInstance = selectedObject && (() => removeDocById(selectedObject._id).then(() => getInstances()));
	const updateInstance = () => updateDoc(selectedObject).then(() => getInstances());

	useEffect(() => {
		getInstances();
		return () => {};
	}, []);
	console.log('createdObject', createdObject);
	console.log('instances', instances);
	console.log('selectedObject', selectedObject);
	return (
		<div>
			<Form {...{ createObject }}>{children}</Form>
			<button onClick={createInstance}>Добавить запись</button>
			{selectedObject && <button onClick={removeInstance}>Удалить запись</button>}
			<Instances {...{ instances, selectObject, selectedObject, updateInstance }} />
		</div>
	);
};

export const Form: FC<{
	createObject: (
		value: React.SetStateAction<{
			[key: string]: string;
		}>
	) => void;
}> = ({ createObject, children }) => {
	const setValue = (property: { name: string; value: string }) => {
		createObject((object) => {
			const _object = { ...object };
			_object[property.name] = property.value;
			return { ..._object };
		});
	};
	return (
		<div>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child as ReactElement<any, string | JSXElementConstructor<any>>, {
					setValue,
				});
			})}
		</div>
	);
};

export const Instances: FC<{
	instances: { [key: string]: string }[];
	selectedObject?: { [key: string]: string };
	selectObject: Dispatch<SetStateAction<{ [key: string]: string } | undefined>>;
	updateInstance: () => Promise<void>;
}> = ({ selectObject, selectedObject, instances, updateInstance }) => {
	const [editInstanceId, setEditInstanceId] = useState<string>('');
	return (
		<div>
			{instances.map((object) => {
				return editInstanceId === object._id ? (
					selectedObject && (
						<EditableInstance {...{ key: object._id, selectObject, selectedObject, updateInstance,setEditInstanceId }} />
					)
				) : (
					<Instance {...{ object, key: object._id, selectObject, selectedObject, setEditInstanceId }} />
				);
			})}
		</div>
	);
};

export const Instance: FC<{
	selectedObject?: { [key: string]: string };
	object: { [key: string]: string };
	selectObject: Dispatch<SetStateAction<{ [key: string]: string } | undefined>>;
	setEditInstanceId: (value: React.SetStateAction<string>) => void;
}> = ({ selectObject, selectedObject, object, setEditInstanceId }) => {
	const isSelected = selectedObject === object;
	const style = (isSelected && { outline: '1px black solid ' }) || {};
	return (
		<div
			style={style}
			onClick={() => {
				selectObject(object);
				setEditInstanceId('');
			}}
		>
			{isSelected && (
				<button
					onClick={(e) => {
						e.stopPropagation();
						setEditInstanceId(object._id);
					}}
				>
					Редактировать
				</button>
			)}
			{Object.keys(object)
				.filter((name) => name !== '_id')
				.map((name) => (
					<Property {...{ key: name, name, value: object[name] }} />
				))}
		</div>
	);
};

export const EditableInstance: FC<{
	selectedObject: { [key: string]: string };
	selectObject: Dispatch<SetStateAction<{ [key: string]: string } | undefined>>;
	updateInstance: () => Promise<void>;
  setEditInstanceId: (value: React.SetStateAction<string>) => void;
}> = ({ selectObject, selectedObject, updateInstance,setEditInstanceId }) => {
	const setValue = (property: { name: string; value: string }) => {
		selectObject((object) => {
			const _object = { ...object };
			_object[property.name] = property.value;
			return { ..._object };
		});
	};

	const style = { outline: '1px black solid ' };
	return (
		<div style={style}>
			{Object.keys(selectedObject)
				.filter((name) => name !== '_id')
				.map((name) => (
					<NamedInput {...{ setValue, key: name, name, value: selectedObject[name] }} />
				))}
			{
				<button
					onClick={(e) => {
						e.stopPropagation();
						updateInstance();
            setEditInstanceId("")
					}}
				>
					Применить
				</button>
			}
		</div>
	);
};

export const NamedInput: FC<{ setValue?: Function; name: string; value?: string }> = ({ name, value, setValue }) => {
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

export const Property: FC<{ name: string; value: string }> = ({ name, value }) => {
	return (
		<div>
			<div>{name}</div> <div>{value}</div>
		</div>
	);
};
