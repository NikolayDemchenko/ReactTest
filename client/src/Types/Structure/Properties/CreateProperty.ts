import { Component } from '../Component';

export const createProperty = (
    Container: Component,
    Key: Component,
    Value: Component
  ) => {
    return (key: string, value: any) => {
      return Container.render([Key.render(key), Value.render(value)]);
    };
  };