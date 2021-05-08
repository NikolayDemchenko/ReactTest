import { Component } from '../Component';

export const Span = (className: string) => {
    const text =  new Component("span");   
    text.props.className = className;
    return text
  };