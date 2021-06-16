import React, {
  Dispatch,
  FC,
  JSXElementConstructor,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

import { RESTManager } from '../../Function/ServiceFunction/REST/RESTManager';
import {
  InstanceProperty,
  Property,
  PropertyComponent,
} from './Property';

export const Contacts: FC = () => {
  return (
    <Table name={"person"}>
		{new Property("Классовый").view({})}
      <PropertyComponent name={"Имя"} />
      <PropertyComponent name={"Полное имя"} />
      <PropertyComponent name={"Телефон"} />
      <PropertyComponent name={"Адрес"} />
      <PropertyComponent name={"Имя2"} />
      <PropertyComponent name={"Полное имя2"} />
      <PropertyComponent name={"Телефон2"} />
      <PropertyComponent name={"Адрес2"} />
    </Table>
  );
};

export const Table: FC<{ name: string }> = ({ name, children }) => {
  const [createdObject, createObject] = useState<{ [key: string]: string }>({});
  const [selectedInstance, selectInstance] =
    useState<{ [key: string]: string }>();
  const [instances, setInstances] = useState<{ [key: string]: string }[]>([]);

  const { getCollection, createDoc, updateDoc, removeDocById } =
    RESTManager(name);

  const getInstances = () =>
    getCollection().then((instances) => setInstances(instances));
  const createInstance = () => {
    createDoc(createdObject).then(() => getInstances());
    createObject({});
  };
  const removeInstance =
    selectedInstance &&
    (() => removeDocById(selectedInstance._id).then(() => getInstances()));
  const updateInstance = () =>
    updateDoc(selectedInstance).then(() => getInstances());

  useEffect(() => {
    getInstances();
    return () => {};
  }, []);
  // console.log('createdObject', createdObject);
  // console.log('instances', instances);
  console.log("selectedInstance", selectedInstance);
  return (
    <div>
      <Form {...{ createObject, createdObject }}>{children}</Form>
      <button onClick={() => {}}>Найти запись</button>
      <button onClick={createInstance}>Добавить запись</button>
      {selectedInstance && (
        <button onClick={removeInstance}>Удалить запись</button>
      )}
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



const FilterInstances = (
  searchObject: { [key: string]: string },
  instances: { [key: string]: string }[]
) => {
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
  selectInstance: Dispatch<
    SetStateAction<{ [key: string]: string } | undefined>
  >;
  updateInstance: () => Promise<void>;
}> = ({
  selectInstance,
  selectedInstance,
  instances,
  updateInstance,
  children,
}) => {
  const [editInstanceId, setEditInstanceId] = useState<string | undefined>("");
  selectedInstance &&
    console.log("selectedInstance._id :>> ", selectedInstance._id);
  editInstanceId && console.log("editInstanceId :>> ", editInstanceId);

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
        const child = _child as ReactElement<
          any,
          string | JSXElementConstructor<any>
        >;
        const name = child.props.name;
        return React.cloneElement(child, {
          setValue,
          value: createdObject[name],
        });
      })}
    </div>
  );
};


export const Instance: FC<{
  selectedInstance?: { [key: string]: string };
  instance: { [key: string]: string };
  selectInstance: Dispatch<
    SetStateAction<{ [key: string]: string } | undefined>
  >;
  setEditInstanceId: (value: React.SetStateAction<string | undefined>) => void;
}> = ({
  selectInstance,
  selectedInstance,
  instance,
  setEditInstanceId,
  children,
}) => {
  const isSelected = selectedInstance === instance;
  const style = (isSelected && { outline: "1px black solid " }) || {};
  return (
    <div
      style={style}
      onClick={() => {
        selectInstance(instance);
        setEditInstanceId("");
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
        const child = _child as ReactElement<
          any,
          string | JSXElementConstructor<any>
        >;
        const name = child.props.name;
        return (
          instance[name] && (
            <InstanceProperty {...{ key: name, name, value: instance[name] }} />
          )
        );
      })}
    </div>
  );
};

export const EditableInstance: FC<{
  selectedInstance: { [key: string]: string };
  selectInstance: Dispatch<
    SetStateAction<{ [key: string]: string } | undefined>
  >;
  updateInstance: () => Promise<void>;
  setEditInstanceId: (value: React.SetStateAction<string | undefined>) => void;
}> = ({
  selectInstance,
  selectedInstance,
  updateInstance,
  setEditInstanceId,
  children,
}) => {
  const setValue = (property: { name: string; value: string }) => {
    selectInstance((_object) => {
      const object = { ..._object };
      object[property.name] = property.value;
      if (property.value === "") {
        delete object[property.name];
        // console.log(`object[property.name]`, object);
      }
      return { ...object };
    });
  };

  const style = { outline: "1px black solid " };
  return (
    <div style={style}>
      {React.Children.map(children, (_child) => {
        const child = _child as ReactElement<
          any,
          string | JSXElementConstructor<any>
        >;
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
            setEditInstanceId(undefined);
            selectInstance(undefined);
          }}
        >
          Применить
        </button>
      }
    </div>
  );
};
