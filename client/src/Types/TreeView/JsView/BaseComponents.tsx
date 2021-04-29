import React, { FC } from 'react';

import {
  ISwitcher,
  TJs,
  TJsArr,
  TJsObj,
} from './';
import { ViewTitles } from './Titles/Titles';

const title = new ViewTitles();
// viewColor.setArray({ color: "#578", "mix-blend-mode": "difference" });
export const JsString = (str: string): FC => () => {
  return <title.String>{str}</title.String>;
};
export const JsNumber = (num: number): FC => () => {
  return <title.Number>{num}</title.Number>;
};
export const JsBoolean = (bool: boolean): FC => () => {
  return <input title={"boolean"} type={"checkbox"} checked={bool} />;
};

export const JsArray = (switcher: ISwitcher, arr: TJsArr): FC => () => {
  return (
    <title.Array>
      {arr.map((element, index) => {
        const Element = switcher(element);
        return (
          <title.ArrayElement key={"_" + index}>
            <Element />
          </title.ArrayElement>
        );
      })}
    </title.Array>
  );
};

export const JsObject = (switcher: ISwitcher, value: TJsObj): FC => () => {
  // console.log('Объект :>> ', value);
  return (
    <title.Object>
      {Object.keys(value).map((_key, index) => {
        const Property = JsProperty(switcher, _key, value[_key]);
        return <Property key={index}/>;
      })}
    </title.Object>
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
    <title.Property>
      <title.Key>
        <Key />
      </title.Key>
      <title.Value>
        <Value />
      </title.Value>
    </title.Property>
  );
};
