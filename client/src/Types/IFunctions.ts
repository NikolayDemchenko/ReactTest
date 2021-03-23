import { INodeManager, IPage, IStyle, IStyleManager, INode } from './BaseTypes';
interface IUpdateNode {
	(nodeId: string, propName: string, propValue: string | number | object): void;
}
interface IGetNodeManager {
	(page: IPage, setPage: React.Dispatch<React.SetStateAction<IPage>>): INodeManager;
}
interface IGetStyleManager {
	(page: IPage, node: INode, setPage: React.Dispatch<React.SetStateAction<IPage>>, style: IStyle): IStyleManager;
}
interface IGetDefaultCssProps {
	(nodeId: string): string[] | undefined;
}

export type { IUpdateNode, IGetNodeManager, IGetStyleManager, IGetDefaultCssProps };
