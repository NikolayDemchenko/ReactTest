import React from 'react';

import { Container } from './Entities/MyArray';
import { PropertyArray } from './Entities/PropertyArray';
import { PropertyString } from './Entities/PropertyString';

export interface IString {
  title: string
  data:string
}
export interface IArray {
  title: string
  data:TDataProperty[]
}


export type TDataProperty = IString | IArray;
export type TData = TDataProperty | TDataProperty[];


export type TClassProperty = PropertyString | PropertyArray;

export interface IComponent {
  render: () => React.DOMElement<{ [key: string]: any }, Element>;
  getData: () =>TData;
}





const array=new PropertyArray("Главный контейнер",new Container([new PropertyString("Наименование: ","Проект Инвест"),new PropertyArray("Адрес: ",new Container([new PropertyString("Страна: ","Россия")])),new PropertyArray("Главный контейнер",new Container([new PropertyString("Наименование: ","Проект Инвест"),new PropertyArray("Адрес: ",new Container([new PropertyString("Страна: ","Россия")]))]))]))
export const baseProp=array.render()

export const getDataTest=()=>  console.log(`array.getData()`, array.getData()) 

