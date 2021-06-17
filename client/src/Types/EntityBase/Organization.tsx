import React, { Dispatch, FC, JSXElementConstructor, ReactElement, SetStateAction, useEffect, useState } from 'react';

import { RESTManager } from '../../Function/ServiceFunction/REST/RESTManager';
import { Form, EditableInstance, Instance, Entity } from './Entity';
import { IEntity } from './Interfaces';
import { InstanceProperty, Property, PropertyComponent } from './Property';

export const Contacts: FC = () => {
	return (
		<>
			<Table name={'person'}>	
				<PropertyComponent name={'Имя'} />
				<PropertyComponent name={'Полное имя'} />
				<PropertyComponent name={'Телефон'} />
				<PropertyComponent name={'Адрес'} />
				<PropertyComponent name={'Имя2'} />
				<PropertyComponent name={'Полное имя2'} />
				<PropertyComponent name={'Телефон2'} />
				<PropertyComponent name={'Адрес2'} />
			</Table>
			{new ClassTable('person', new Entity([new Property('Имя')]), RESTManager).view({})}
		</>
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
	console.log('selectedInstance', selectedInstance);
	return (
		<div>
			<Form {...{ createObject, createdObject }}>{children}</Form>
			<button onClick={() => {}}>Найти запись</button>
			<button onClick={createInstance}>Добавить запись</button>
			{selectedInstance && <button onClick={removeInstance}>Удалить запись</button>}
			<Instances
				{...{
					instances,
					selectInstance,
					selectedInstance,
					updateInstance,
					children,
				}}
			/>
		</div>
	);
};

const FilterInstances = (searchObject: { [key: string]: string }, instances: { [key: string]: string }[]) => {
	// Поиск по подстроке и сортировка по позиции подстроки
	Object.keys(searchObject).forEach((key) => {
		const value = searchObject[key];
		instances = instances
			.filter((instance) => instance[key].includes(value))
			.sort((a, b) => a[key].indexOf(value) - b[key].indexOf(value));
	});
	return instances;
};

export const Instances: FC<{
	instances: { [key: string]: string }[];
	selectedInstance?: { [key: string]: string };
	selectInstance: Dispatch<SetStateAction<{ [key: string]: string } | undefined>>;
	updateInstance: () => Promise<void>;
}> = ({ selectInstance, selectedInstance, instances, updateInstance, children }) => {
	const [editInstanceId, setEditInstanceId] = useState<string | undefined>('');
	selectedInstance && console.log('selectedInstance._id :>> ', selectedInstance._id);
	editInstanceId && console.log('editInstanceId :>> ', editInstanceId);

	return (
		<div>
			{instances.map((instance) => {
				return selectedInstance && selectedInstance._id === instance._id ? (
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

export class Entities {
	entities: { [key: string]: string }[];
	constructor(entities: { [key: string]: string }[]) {
		this.entities = entities;
	}

	view: FC = () => {
		console.log(`Entities.view`)
		return (
			<div>
				{"Сущности"}
				{this.entities.map((entity) => {
					return new Entity(Object.keys(entity).map((key) => new Property(key, entity[key]))).view({});
				})}
			</div>
		);
	};
}

export class ClassTable {
	name: string;
	entity: IEntity;
	crud: Function;
	constructor(name: string, entity: IEntity, crud: Function) {
		this.name = name;
		this.entity = entity;

		this.crud = crud;
	}

	view: FC = () => {
		const [createdEntity, createEntity] = useState<{ [key: string]: string }>({});
		const [selectedEntity, selectEntity] = useState<{ [key: string]: string }>();
		const [entities, setEntities] = useState<{ [key: string]: string }[]>([]);

		const { getCollection, createDoc, updateDoc, removeDocById } = this.crud(this.name);

		const getInstances = () =>
			getCollection().then((entities: React.SetStateAction<{ [key: string]: string }[]>) =>
				setEntities(entities)
			);
		const createInstance = () => {
			createDoc(createdEntity).then(() => getInstances());
			createEntity({});
		};
		const removeInstance = selectedEntity && (() => removeDocById(selectedEntity._id).then(() => getInstances()));
		const updateInstance = () => updateDoc(selectedEntity).then(() => getInstances());

		useEffect(() => {
			getInstances();
			return () => {};
		}, []);

		return  new Entities(entities).view({});
	};
}
