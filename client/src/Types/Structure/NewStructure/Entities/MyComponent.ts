import shortid from 'shortid';

export class MyComponent {
  readonly _id: string;
  private _tag: string;
  public get tag(): string {
    return this._tag;
  }
  setTag = (tag: string) => (this._tag = tag);

  private _props: { [key: string]: any };
  public get props(): { [key: string]: any } {
    return this._props;
  }
  setProps = (props: { [key: string]: any }) => (this._props = props);
  getData = () => ({ _id: this._id, tag: this.tag, props: this.props });
  constructor(_id?: string, tag?: string, props?: { [key: string]: any }) {
    this._id = _id || shortid.generate();
    this._tag = tag || "div";
    this._props = props || {};
  }
}
