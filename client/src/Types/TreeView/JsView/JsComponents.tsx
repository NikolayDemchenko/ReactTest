import { FC } from 'react';

import {
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
	(switcher: Function, value: TJsArr): FC;
}
export interface HocFCObject {
	(switcher: Function, value: TJsObj): FC;
}

export interface IJsComponents {
	String: HocFCString;
	Number: HocFCNumber;
	Boolean: HocFCBoolean;
	Array: HocFCArray;
	Object: HocFCObject;
	setComponents: ({
		String,
		Number,
		Boolean,
		Array,
		Object,
	}: {
		String?: HocFCString;
		Number?: HocFCNumber;
		Boolean?: HocFCBoolean;
		Array?: HocFCArray;
		Object?: HocFCObject;
	}) => void;
}

export class JsComponents implements IJsComponents {
	String: HocFCString = JsString;
	Number: HocFCNumber = JsNumber;
	Boolean: HocFCBoolean = JsBoolean;
	Array: HocFCArray = JsArray;
	Object: HocFCObject = JsObject;

	setComponents = ({
		String,
		Number,
		Boolean,
		Array,
		Object,
	}: {
		String?: HocFCString;
		Number?: HocFCNumber;
		Boolean?: HocFCBoolean;
		Array?: HocFCArray;
		Object?: HocFCObject;
	}) => {
		this.String = String ? String : this.String;
		this.Number = Number ? Number : this.Number;
		this.Boolean = Boolean ? Boolean : this.Boolean;
		this.Array = Array ? Array : this.Array;
		this.Object = Object ? Object : this.Object;
	};
}
