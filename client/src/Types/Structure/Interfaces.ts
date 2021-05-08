export interface IBaseComponent {
  tag: string;
  props: { [key: string]: any };
  render: (data: any) => React.DOMElement<{ [key: string]: any }, Element>;
}
export interface IContainerComponent extends IBaseComponent {
  chldren: React.ReactNode[];
}
export interface IVoidComponent extends IBaseComponent {
  valueAttribute: string;
}
export interface IContainerProperty extends IContainerComponent {
  key: IBaseComponent;
  value: IBaseComponent;
}
export interface IVoidProperty extends IContainerComponent {
  key: IBaseComponent;
  value: IVoidComponent;
}
export interface IObjectComponent extends IContainerComponent {
  properties: IBaseComponent[];
}
