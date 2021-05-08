import { Component } from '../Component';

export const Container = (tag:string,className: string) => {
  const container = new Component(tag);
  container.props.className = className;
  return container;
};
export const Div = (className: string) => Container("div",className)
