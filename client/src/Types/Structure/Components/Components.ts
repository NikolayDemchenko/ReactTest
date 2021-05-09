import { Container } from '../Model';
import { Void } from '../Model';

export const Div = (className: string) => new Container('div', { className });
export const Span = (className: string) => new Container('span', { className });
export const InputWithPlaceholder = (className: string) => new Void('input', { className }, 'placeholder');
