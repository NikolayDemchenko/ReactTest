import shortid from 'shortid';

import { IElement } from './Element';

export const createSimpleElement=():IElement=>{
return {
    _id: shortid.generate(),
    name: "simple_element",
    children: [
      "Привет я текс в элементе"
    ],
    tag: "div",
    attributes: {},
  }
}