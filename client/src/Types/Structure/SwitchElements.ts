import { Classes } from 'jss';

import {
  IDataContainer,
  IDataContainerElement,
  RenderContainer,
} from './Container';
import {
  IText,
  RenderText,
} from './Text';

export const SwitchElement = (
  element: IDataContainerElement,
  styleSheet: Classes
) => {
  switch (element.type) {
    case "container":
      console.log("container",element.styleName);
      return new RenderContainer(styleSheet).render(element as IDataContainer);
    case "text":
      console.log("text",element.styleName);
      
      return new RenderText(styleSheet).render(element as IText);
  }
};
