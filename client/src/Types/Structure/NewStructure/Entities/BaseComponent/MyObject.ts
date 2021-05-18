import {
  ICollection,
  IData,
  TObject,
} from '../../Interfaces';

export class MyObject  implements IData, ICollection {
  private _collection: TObject={};
  public get collection(): any {
    return this._collection;
  }

  getData = ():TObject =>  this.collection ;
  setData = (collection: TObject) => (this._collection = collection);
  constructor(collection: TObject) {
    this._collection = collection; 
  }
  add = (key: string, value: any) => {
    this._collection[key] = value;
  };
  remove = (key: string) => {
    delete this._collection[key];
  };
}

