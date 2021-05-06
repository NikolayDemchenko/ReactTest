import {
  IElement,
  TChildren,
} from './Element';
import { ElementEditor } from './ElementEditor';

export class MyElement extends ElementEditor {
  constructor(entity: IElement, setElement: Function) {
    super(entity, setElement);
  }
  public pushChildren(children:TChildren){
      this.setChildren([...this.children,...children])
  }
  public unshiftChildren(children:TChildren){
      this.setChildren([...children,...this.children])
  }
  public removeChildren(children:TChildren){    
      this.setChildren(this.children.filter(child => !children.includes(child)))
  }
}
