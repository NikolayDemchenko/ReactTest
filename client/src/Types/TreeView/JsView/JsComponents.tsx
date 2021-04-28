import { FC } from 'react';

import {
  ISwitcher,
  TJsArr,
  TJsObj,
} from './';
import {
  JsArray,
  JsBoolean,
  JsNumber,
  JsObject,
  JsString,
} from './BaseComponents';

export interface HocFCString {
  (value: string): FC;
}
export interface HocFCNumber {
  (value: number): FC;
}
export interface HocFCBoolean {
  (value: boolean): FC;
}
export interface HocFCArray {
  (switcher: ISwitcher, value: TJsArr): FC;
}
export interface HocFCObject {
  (switcher: ISwitcher, value: TJsObj): FC;
}

export interface IJsComponents {
  String: HocFCString;
  Number: HocFCNumber;
  Boolean: HocFCBoolean;
  Array: HocFCArray;
  Object: HocFCObject;
}

export class JsComponents implements IJsComponents {
  String: HocFCString = JsString;
  Number: HocFCNumber = JsNumber;
  Boolean: HocFCBoolean = JsBoolean;
  Array: HocFCArray = JsArray;
  Object: HocFCObject = JsObject;
}
