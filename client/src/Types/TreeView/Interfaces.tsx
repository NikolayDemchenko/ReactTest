import React, { ReactElement } from 'react';
import { FC } from 'react';

interface IComponent<T> {
	Component: FC<T>;
}

interface ITree {
	nodes: ITreeNode[];
}
interface ITreeNode {
	parent: ITreeNode;
	nodes: ITreeNode[];
}

class Tree implements ITree, IComponent<ITree> {
	nodes: ITreeNode[];
	constructor(nodes: ITreeNode[]) {
		this.nodes = nodes;
	}
	Component: FC<ITree> = ({ children }) => <div>{children}</div>;
}
export type { ITree };
