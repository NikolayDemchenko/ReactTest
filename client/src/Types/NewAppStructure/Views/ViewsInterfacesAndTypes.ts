import { IMyChildren, MyChildrenType } from '../Model/ValuesInterfacesAndTypes';

export interface IMyElementView {
	returnReactElement(children?: MyChildrenType): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

export interface IMyChildrenView {
	returnReactElements(): (string | React.ReactElement<any, string | React.JSXElementConstructor<any>>)[];
}

export interface IContainerView {
	returnReactElement(): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}
export interface IPageView {
	returnReactElement(): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}