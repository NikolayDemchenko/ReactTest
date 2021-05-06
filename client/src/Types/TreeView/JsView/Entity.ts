type TChild = Element | string;
type TChildren = TChild[];

export interface TAttributes {
  [key: string]: string;
}

export interface IElement {
  readonly id: string;
  name: string;
  type: string;
  children: TChildren;
  attributes: TAttributes; 
}

export class Element implements IElement {
  readonly id: string;

  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(name: string) {
    this._name = name;
    this.setElement();
  }
  private _type: string;
  public get type(): string {
    return this._type;
  }
  public set type(type: string) {
    this._type = type;
    this.setElement();
  }
  private _children: TChildren;
  public get children(): TChildren {
    return this._children;
  }
  public set children(children: TChildren) {
    this._children = children;
    this.setElement();
  }
  private _attributes: TAttributes;
  public get attributes(): TAttributes {
    return this._attributes;
  }
  public set attributes(attributes: TAttributes) {
    this._attributes = attributes;
    this.setElement();
  }
  setElement: Function;

  /**
   *
   */

  constructor(entity: IElement, setElement: Function) {
    this.id = entity.id;
    this._name = entity.name;
    this._type = entity.type;
    this._children = entity.children;
    this._attributes = entity.attributes;
   
    this.setElement = () =>
      setElement({
        id: this.id,
        name: this.name,
        type: this.type,
        children: this.children,
        attributes: this.attributes     
      });
  }
  readonly consoleThis = () => {
    console.log(this);
  };
}
