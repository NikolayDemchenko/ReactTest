import { FC } from 'react';

type TJson = string | number | boolean | null | TJsonArr | TJsonObj;
type TJsonArr = TJsonObj[];
type TJsonObj = { [key: string]: TJson };

export type FCString = FC<{ value: string }>;
export type FCNumber = FC<{ value: number }>;
export type FCBoolean = FC<{ value: boolean }>;
export type FCJsonArray = FC<{ value: TJsonArr }>;
export type FCJsonObject = FC<{ value: TJsonObj }>;

interface IViewComponents {
  String: FCString;
  Number: FCNumber;
  Boolean: FCBoolean;
  JsonArray: FCJsonArray;
  JsonObject: FCJsonObject;
}

class ViewComponents implements IViewComponents {
  String: FCString;
  Number: FCNumber;
  Boolean: FCBoolean;
  JsonArray: FCJsonArray;
  JsonObject: FCJsonObject;
  constructor(
    _String: FCString,
    _Number: FCNumber,
    _Boolean: FCBoolean,
    _JsonArray: FCJsonArray,
    _JsonObject: FCJsonObject
  ) {
    this.String = _String;
    this.Number = _Number;
    this.Boolean = _Boolean;
    // Убрать из конструктора массив и объект так как они всегда будут одинаково работать?
    this.JsonArray = _JsonArray;
    this.JsonObject = _JsonObject;
  }

   getComponent = (obj: TJson) => {
    switch (typeof obj) {
      case "string":
        // console.log(`${obj}  Да, сучка, это string!`);
        return this.String;
      //   return "string";
      case "number":
        // console.log(`${obj} -  number нахуй!`);
        return this.Number;
      //   return "number";
      case "boolean":
        // console.log(`${obj} - boolean нахуй!`);
        return this.Boolean;
      //   return "boolean";
      case "object":
        if (obj instanceof Array) {
          // console.log(`${obj} - array нахуй!`);
          return this.JsonArray;
          // return "array";
        } else {
          // console.log(`${obj} - object нахуй!`);
          return this.JsonObject;
          // return "object";
        }
    }
  };
}


