import {
  Container,
  Void,
} from '../BaseObject/Model';

export const Div = (className: string) => new Container('div', { className });
export const Span = (className: string) => new Container('span', { className });
export const InputWithPlaceholder = (className: string) => new Void('input', { className }, 'placeholder');
