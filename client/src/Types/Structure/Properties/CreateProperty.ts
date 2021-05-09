import { IBaseComponent } from "../Model";

export const createProperty = (
    Container: IBaseComponent,
    Key: IBaseComponent,
    Value: IBaseComponent
  ) => {
    return (key: string, value: any) => {
      return Container.render([Key.render(key), Value.render(value)]);
    };
  };