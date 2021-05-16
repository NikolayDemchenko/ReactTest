import React from 'react';

import { Classes } from 'jss';

import {
  IData,
  IRender,
  ReactElement,
} from './Container';

export interface IText extends IData {
  value: string;
}

export class RenderText implements IRender<IText> {
  styleSheet: Classes<string | number>;

  constructor(styleSheet: Classes<string | number>) {
    this.styleSheet = styleSheet;
  }

  render: (data: IText) => ReactElement = (data: IText) => {
    console.log(`IText data.styleName`, data.styleName);
    return React.createElement(
      "span",
      {
        key: data.name,
        className: this.styleSheet[data.styleName],
        onClick: (e: any) => {
          e.stopPropagation();
          console.log(`data.name`, data.name);
        },
      },
      data.value
    );
  };
}
