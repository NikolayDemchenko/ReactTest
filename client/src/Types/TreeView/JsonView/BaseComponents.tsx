import React from 'react';

import {
  FCBoolean,
  FCJsonArray,
  FCNumber,
  FCString,
} from './';

export const BaseString: FCString = ({ value }) => {
  return <div title={"string"}>{value}</div>;
};
export const BaseNumber: FCNumber = ({ value }) => {
  return <div title={"number"}>{value}</div>;
};
export const BaseBoolean: FCBoolean = ({ value }) => {
  return <input title={"boolean"} type={"checkbox"}  checked={value}/>;
};
// Нужно замапить массив и для каждого  элемента вызывать, свитчер который выберет и вставит нужный компонент
export const BaseJsonArray: FCJsonArray = ({ value }) => {
  return <div title={"array"} />;
};
