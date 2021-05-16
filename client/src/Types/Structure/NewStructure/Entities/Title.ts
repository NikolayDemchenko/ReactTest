export class Title {
    private _title: string;
    public get title(): string {
      return this._title;
    }
    setTitle: (title: string) => void = (title) => {
      this._title = title;
    };
  
    constructor(title: string) {
      this._title = title;
    }
  }