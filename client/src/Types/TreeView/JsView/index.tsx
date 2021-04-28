import { FC } from 'react';

import { JsComponents } from './JsComponents';

export type TJs = string | number | boolean | null | TJsArr | TJsObj;
export type TJsArr = TJs[];
export type TJsObj = { [key: string]: TJs };

export interface ISwitcher{
  (obj: TJs) : FC
}
interface IJsView {
  switcher: ISwitcher;
  component: FC;
}
export class JsView implements IJsView {
  private components: JsComponents = new JsComponents();
  component: FC;
  obj: TJs;
  constructor(obj: TJs) {
    this.obj = obj;
    this.component = this.switcher(this.obj);
  }
  switcher = (obj: TJs) => {
    switch (typeof obj) {
      case "string":
        // console.log(`${obj} `);
        return this.components.String(obj);

      case "number":
        // console.log(`${obj} -  number!`);
        return this.components.Number(obj);

      case "boolean":
        // console.log(`${obj} - boolean!`);
        return this.components.Boolean(obj);

      case "object":
        if (obj instanceof Array) {
          // console.log(`${obj} - array!`);
          return this.components.Array(this.switcher, obj);
        } else if (obj === null) {
          return this.components.String("null");
        } else {
          console.log(`${obj} - object!`);
          return this.components.Object(this.switcher, obj!);
        }
    }
  };
}
