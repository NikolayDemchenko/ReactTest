import { INodeManager,TPage, TStyle, IStyleManager, TNode } from './BaseTypes';
interface IUpdateNode {
	(nodeId: string, propName: string, propValue: string | number | object): void;
}
interface IGetNodeManager {
	(page: TPage, setPage: React.Dispatch<React.SetStateAction<TPage>>): INodeManager;
}
interface IGetStyleManager {
	(page: TPage, node: TNode, setPage: React.Dispatch<React.SetStateAction<TPage>>, style: TStyle): IStyleManager;
}
interface IGetDefaultCssProps {
	(nodeId: string): string[] | undefined;
}

export type { IUpdateNode, IGetNodeManager, IGetStyleManager, IGetDefaultCssProps };
