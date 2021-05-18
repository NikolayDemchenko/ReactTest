import { MyObject } from './Entities/BaseComponent/MyObject';
import { MyReactElement } from './Entities/BaseComponent/MyReactElement';
import { MyArray } from './Entities/MyArray';
import { MyText } from './Entities/MyText';
import { MyVariable } from './Entities/MyVariable';

export type TObject = { [key: string]: any };
export interface IReactElementData {
  _id: string;
  tag: string;
  props: TObject;
}
export interface IMyTextData {
  text: string;
  element:IReactElementData
}
export interface IMyVariableData {
  key: IMyTextData;
  value: IMyTextData | IMyArrayData;
  element:IReactElementData
}
export interface IMyArrayData {
  collection: MyData[];
  element:IReactElementData
}
export type MyData = IMyTextData | IMyVariableData | IMyArrayData;





export interface ICollection {
  collection: any;
  add: Function;
  remove: Function;
}

export type MyElement = MyVariable | MyText | MyArray;

export interface IRender {
  render: (...children: React.ReactNode[]) => React.DOMElement<{ [key: string]: any }, Element>;
}
export interface IData {
  setData: Function;
  getData: Function;
}

const testElement = new MyArray([
  new MyText("Первый текстовый элемент", new MyReactElement(
    undefined,
    "div",
    new MyObject({title:"Новый проверочный заголовок", style: {border:"1px solid black", color: "#fff" } })
  )),
  new MyVariable(
    new MyText(
      "Переменная с текстом: ",
      new MyReactElement(
        undefined,
        "div",
        new MyObject({title:"Я проверочный заголовок", style: {border:"1px solid black", color: "red" } })
      )
    ),
    new MyText("Первая текстовая переменная!",  new MyReactElement(
      undefined,
      "div",
      new MyObject({title:"Новый проверочный заголовок", style: {border:"1px solid black", color: "red" } })
    ))
  ),
  new MyVariable(
    new MyText("Переменная с контейнером: "),
    new MyArray([
      new MyText("Второй текстовый элемент"),
      new MyVariable(
        new MyText("Переменная с текстом: "),
        new MyText("Вторая текстовая переменная!")
      ),
    ],  new MyReactElement(
      undefined,
      "div",
      new MyObject({ title:"Я тоже проверочный заголовок", style: {border:"1px solid black", color: "blue" } })
    ))
  ),
  new MyArray([
    new MyText("Третий текстовый элемент"),
    new MyVariable(
      new MyText("Переменная с текстом: "),
      new MyText("Третья текстовая переменная!")
    ),
    new MyVariable(
      new MyText("Переменная с контейнером: "),
      new MyArray([
        new MyText("Четвёртый текстовый элемент"),
        new MyVariable(
          new MyText("Переменная с текстом: "),
          new MyText("Четвёртая текстовая переменная!")
        ),
      ])
    ),
  ]),
], );
const text = new MyText("Добавили меня!! ");
testElement.add(text);
// array.remove(text);
export { testElement };