import { MyObject } from '../Entities/BaseComponent/MyObject';
import { MyReactElement } from '../Entities/BaseComponent/MyReactElement';
import { MyArray } from '../Entities/MyArray';
import { MyText } from '../Entities/MyText';
import { MyVariable } from '../Entities/MyVariable';
import {
  IMyArrayData,
  IMyTextData,
  IMyVariableData,
  MyData,
  MyElement,
} from '../Interfaces';
import TestData from '../TestData.json';

// Переделать ElementCreator в класс с функцией render, принимающий в конструктор типы компонентов 
export const ElementCreator = (object: MyData): MyElement => {
  let result: MyElement;

  switch (Object.keys(object)[0]) {
    case "collection":
      const array = object as IMyArrayData; 
      result = new MyArray(
        array.collection.map((el) => ElementCreator(el)),
        new MyReactElement(
          array.element._id,
          array.element.tag,
          new MyObject(array.element.props)
        )
      );
      break;
    case "key":
      const variable = object as IMyVariableData;
      result = new MyVariable(
        ElementCreator(variable.key) as MyText,
        ElementCreator(variable.value) as MyText | MyArray
      );
      break;
    case "text":
      const text = object as IMyTextData;
      result = new MyText(
        text.text,
        new MyReactElement(
          text.element._id,
          text.element.tag,
          new MyObject(text.element.props)
        )
      );
      break;
  }
  return result!;
};
export const createdElement = ElementCreator(TestData);

class ModelCreator{


}