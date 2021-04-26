import React, { FC } from 'react';

import {
  TJsArr,
  TJsObj,
} from './';

export const JsString = (str: string): FC => () => {
  return (
    <div title={"string"}>
      {"string: "}
      {str}
    </div>
  );
};
export const JsNumber = (num: number): FC => () => {
  return (
    <div title={"number"}>
      {"number: "}
      {num}
    </div>
  );
};
export const JsBoolean = (bool: boolean): FC => () => {
  return <input title={"boolean"} type={"checkbox"} checked={bool} />;
};

export const JsArray = (switcher: Function, arr: TJsArr): FC => () => {
  return (
    <>
      {"Array: "}
      {arr.map((element, index) => {
        const Element = switcher(element);
        return (
          <div key={index}>
            {"Element: "}
            <Element />
          </div>
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
      {"Object: "}
      {Object.keys(value).map((_key, index) => {
        const Property = JsProperty(switcher, _key, value);
        return <Property key={index} />;
      })}
    </>
  );
};

export const JsProperty = (
  switcher: Function,
  _key: string,
  value: TJsObj
): FC => () => {
  // console.log('Объект :>> ', value);
  const Key = switcher(_key);
  const Value = switcher(value);
  return (
    <>
      {"property: "}
      {"key: "}
      <Key />
      {"value: "}
      {/* <Value /> */}
    </>
  );
};
