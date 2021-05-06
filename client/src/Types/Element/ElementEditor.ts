import {
  Element,
  IElement,
  TAttributes,
  TChildren,
} from './Element';

export class ElementEditor extends Element {
    public setName(name: string) {
      this.name = name;
      this.setElement();
    }
    public setTag(tag: string) {
      this.tag = tag;
      this.setElement();
    }
    public setChildren(children: TChildren) {
      this.children = children;
      this.setElement();
    }  
  
    public setAttributes(attributes: TAttributes) {
      this.attributes = attributes;
      this.setElement();
    }
    setElement: Function;
  
    /**
     *
     */
  
    constructor(entity: IElement, setElement: Function) {
      super(entity)
      this.setElement = () =>
        setElement({
          _id: this._id,
          name: this.name,
          tag: this.tag,
          children: this.children,
          attributes: this.attributes,
        });
    }
    readonly consoleThis = () => {
      console.log(this);
    };
  }
  