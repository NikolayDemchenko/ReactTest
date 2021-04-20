import {
  FCArray,
  FCBoolean,
  FCNumber,
  FCObject,
  FCString,
  JsComponents,
} from './JsComponents';

export type TJs = string | number | boolean | null | TJsArr | TJsObj;
export type TJsArr = TJs[];
export type TJsObj = { [key: string]: TJs };

interface IJsView {
  // private components: IJsComponents;
  createFC: (obj: TJs) => FCString | FCNumber | FCBoolean | FCArray | FCObject;
}
type FCJsView = FCString | FCNumber | FCBoolean | FCArray | FCObject;

class JsView implements IJsView {
  private components: JsComponents = new JsComponents();
  component: FCJsView;

  constructor(obj: TJs) {
    this.component = this.createFC(obj);
  }

  createFC = (obj: TJs) => {
    // this.components.
    switch (typeof obj) {
      case "string":
        // console.log(`${obj}  Да, сучка, это string!`);
        return this.components.String;
      //   return "string";
      case "number":
        // console.log(`${obj} -  number нахуй!`);
        return this.components.Number;
      //   return "number";
      case "boolean":
        // console.log(`${obj} - boolean нахуй!`);
        return this.components.Boolean;
      //   return "boolean";
      case "object":
        // !!!! // Передеть в компоненты сам свитчер
        if (obj instanceof Array) {
          // console.log(`${obj} - array нахуй!`);
          return this.components.Array;
          // return "array";
        } else {
          // console.log(`${obj} - object нахуй!`);
          return this.components.Object;
          // return "object";
        }
    }
  };
}
