import {
  IData,
  IRender,
} from '../Interfaces';
import { MyBaseComponent } from './BaseComponent/MyBaseComponent';
import { MyReactElement } from './BaseComponent/MyReactElement';

export class MyText extends MyBaseComponent implements IData, IRender {
  private _text: string;
  public get text(): string {
    return this._text;
  }
  setData = (text: string, element?: MyReactElement) => {
    this._text = text;
    element && this.element.setData(element.tag, element.props);
  };
  getData = () => ({ text: this._text, element: this.element.getData() });
  render = () => this.baseRender(this._text);

  constructor(text: string, element?: MyReactElement) {
    super(element);
    this._text = text;
  }
}
