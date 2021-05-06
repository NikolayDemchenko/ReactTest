export interface IElement {
  readonly _id: string;
  name: string;
  tag: string;
  children: TChildren;
  attributes: TAttributes;
}
export type TChild = IElement | string;
export type TChildren = TChild[];

export interface TAttributes {
  [key: string]: string;
}

export class Element implements IElement {
  readonly _id: string;

  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(name: string) {
    this._name = name;
  }
  private _tag: string;
  public get tag(): string {
    return this._tag;
  }
  public set tag(tag: string) {
    this._tag = tag;
  }
  private _children: TChildren;
  public get children(): TChildren {
    return this._children;
  }
  public set children(children: TChildren) {
    this._children = children;
  }
  private _attributes: TAttributes;
  public get attributes(): TAttributes {
    return this._attributes;
  }
  public set attributes(attributes: TAttributes) {
    this._attributes = attributes;
  }
  /**
   *
   */
  constructor(entity: IElement) {
    this._id = entity._id;
    this._name = entity.name;
    this._tag = entity.tag;
    this._children = entity.children;
    this._attributes = entity.attributes;
  }
}

