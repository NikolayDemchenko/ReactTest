interface ISetManager<T> {
  // Если data === undefined , присвоить дефолтные параметры
  update: (data?: T) => void;
  remove: () => void;
}
export class SetManager<T> implements ISetManager<T> {
    private defaultData: T;
    private data?: T;
  constructor(set: (data?: T | undefined) => void, defaultData: T, data?: T) {
    this.set = set;
    this.defaultData = defaultData;
    this.data = data;
  }

  private set: (data?: T) => void;
  private create = (data?: T) => {
    this.data = data || this.defaultData;
    console.log(`this.create()!!!!!!!`, this.data);
    this.set(this.data);
  };
  update = (data?: T) => {
    if (!data) {
      this.create();
    } else if (this.data) {
      this.data = data;
      this.set(this.data);
      console.log(`this.set(data)!!!!!!!`);
    } else {
      this.create(data);
    }
  };
  remove = () => this.set();
}
