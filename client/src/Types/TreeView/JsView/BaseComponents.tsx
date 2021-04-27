import React, { FC } from 'react';

import {
  TJs,
  TJsArr,
  TJsObj,
} from './';
import { ViewColor } from './Types/Types';

const viewColor = new ViewColor();
// viewColor.setArray({ color: "#578", "mix-blend-mode": "difference" });
export const JsString = (str: string): FC => () => {
  return (
    <>
      <viewColor.BaseType>{" string: "}</viewColor.BaseType>
      {str}
    </>
  );
};
export const JsNumber = (num: number): FC => () => {
  return (
    <>
      <viewColor.BaseType>{" number: "}</viewColor.BaseType>
      {num}
    </>
  );
};
export const JsBoolean = (bool: boolean): FC => () => {
  return <input title={"boolean"} type={"checkbox"} checked={bool} />;
};

export const JsArray = (switcher: Function, arr: TJsArr): FC => () => {
  return (
    <>
      <viewColor.Array>{" Array: "}</viewColor.Array>
      {arr.map((element, index) => {
        const Element = switcher(element);
        return (
          <>
            <viewColor.ArrayElement>{" Element: "}</viewColor.ArrayElement>
            <Element key={index} />
          </>
        );
      })}
    </>
  );
};
// Сделать для объекта подкомпонет Row объединяющий имя и значение
export const JsObject = (switcher: Function, value: TJsObj): FC => () => {
  // console.log('Объект :>> ', value);
  return (
    <>
        <viewColor.Object>{" Object: "}</viewColor.Object>
      {Object.keys(value).map((_key, index) => {
        const Property = JsProperty(switcher, _key, value[_key]);
        return <Property key={index} />;
      })}
    </>
  );
};

export const JsProperty = (
  switcher: Function,
  _key: string,
  value: TJs
): FC => () => {
  // console.log('Объект :>> ', value);
  const Key = switcher(_key);
  const Value = switcher(value);
  return (
    <>
       <viewColor.Property>{" property: "}</viewColor.Property>
      <viewColor.Key>{" key: "}</viewColor.Key>
      <Key />
      <viewColor.Value> {" value: "}</viewColor.Value>
      <Value />
    </>
  );
};
