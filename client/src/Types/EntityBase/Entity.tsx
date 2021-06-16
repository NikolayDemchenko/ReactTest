import React, {
  Dispatch,
  FC,
  JSXElementConstructor,
  ReactElement,
  SetStateAction,
} from 'react';

import { InstanceProperty } from './Property';

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
  