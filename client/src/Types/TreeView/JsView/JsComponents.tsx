import { FC } from 'react';

import {
  TJsArr,
  TJsObj,
} from './';
import {
  BaseArray,
  BaseBoolean,
  BaseNumber,
  BaseObject,
  BaseString,
} from './BaseComponents';

export type FCString = FC<{ value: string }>;
export type FCNumber = FC<{ value: number }>;
export type FCBoolean = FC<{ value: boolean }>;
export type FCArray = FC<{ value: TJsArr }>;
export type FCObject = FC<{ value: TJsObj }>;

export interface IJsComponents {
  String: FCString;
  Number: FCNumber;
  Boolean: FCBoolean;
  Array: FCArray;
  Object: FCObject;
  setComponents: ({
    String,
    Number,
    Boolean,
    Array,
    Object,
  }: {
    String?: FCString;
    Number?: FCNumber;
    Boolean?: FCBoolean;
    Array?: FCArray;
    Object?: FCObject;
  }) => void;
}

export class JsComponents implements IJsComponents {
  String: FCString=BaseString;
  Number: FCNumber=BaseNumber;
  Boolean: FCBoolean=BaseBoolean;
  Array: FCArray=BaseArray;
  Object: FCObject=BaseObject;

  setComponents = ({
    String,
    Number,
    Boolean,
    Array,
    Object,
  }: {
    String?: FCString;
    Number?: FCNumber;
    Boolean?: FCBoolean;
    Array?: FCArray;
    Object?: FCObject;
  }) => {
    this.String = String ? String : this.String;
    this.Number = Number ? Number : this.Number;
    this.Boolean = Boolean ? Boolean : this.Boolean;
    this.Array = Array ? Array : this.Array;
    this.Object = Object ? Object : this.Object;
  };
}