export class Row {
  private _data?: string;
  public get data(): string | undefined {
    return this._data;
  }
  setData: (data: string) => void = (data) => {
    this._data = data;
  };
  private _title?: string;
  public get title(): string | undefined {
    return this._title;
  }
  setTitle: (title: string) => void = (title) => {
    this._title = title;
  };

  constructor(title: string,data: string) {
    this._data = data;
    this._title = title;
  }
}
