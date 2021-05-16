import { MyArray } from './Entities/MyArray';
import { MyComponent } from './Entities/MyComponent';
import { MyText } from './Entities/MyText';
import { MyVariable } from './Entities/MyVariable';

export interface IMyTextData {
  text: string;
}
export interface IMyVariableData {
  name: IMyTextData;
  value: IMyTextData | IMyArrayData;
}
export interface IMyArrayData {
  array: MyElementData[];
}
export type MyElementData = IMyTextData | IMyVariableData | IMyArrayData;

export type MyElement = MyVariable | MyText | MyArray;

export interface IRender {
  render: () => React.DOMElement<{ [key: string]: any }, Element>;
}
export interface IData {
  setData: Function;
  getData: () => MyElementData;
}

const array = new MyArray([
  new MyText("Первый текстовый элемент"),
  new MyVariable(
    new MyText(
      "Переменная с текстом: ",
      new MyComponent(undefined, "div", { style: { color: "red" } })
    ),
    new MyText("Первая текстовая переменная!")
  ),
  new MyVariable(
    new MyText("Переменная с контейнером: "),
    new MyArray([
      new MyText("Второй текстовый элемент"),
      new MyVariable(
        new MyText("Переменная с текстом: "),
        new MyText("Вторая текстовая переменная!")
      ),
    ])
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
]);
const text = new MyText("Добавили меня!! ");
array.add(text);
// array.remove(text);
export const baseProp = array.render();

export const getDataTest = () =>
  console.log(`array.getData()`, array.getData());
