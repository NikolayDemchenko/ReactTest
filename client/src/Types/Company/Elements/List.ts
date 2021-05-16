export class List<T> {
  private _list: T[]; 
  constructor(list:T[]) {
    this._list=list      
  }
  public get list():  T[] {
    return this._list;
  }
  add: (t: T) => void = (t) => { 
    this._list.push(t);
  };
  remove: (t: T) => void = (t) => {    
    if (this._list) this._list=this._list.filter(item=>item!==t);    
  };
}
