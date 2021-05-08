import { Component } from '../Component';

export const Div = (className: string) => {
  const container = new Component("div");
  container.props.className = className;
  return container;
};
