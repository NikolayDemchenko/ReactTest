import jss from 'jss';
import preset from 'jss-preset-default';
import shortid from 'shortid';

import {
  createUniqueName,
  createVariable,
} from '../../AppFunction';
import {
  INodeManager,
  IViewNode,
  TJSSClasses,
  TJssStyle,
  TNode,
  TPage,
  TSetState,
  TStyle,
} from '../../Types/BaseTypes';
import {
  IGetDefaultCssProps,
  IUpdateNode,
} from '../../Types/IFunctions';

export class NodeManager implements INodeManager {
	page: TPage;
	setPage: TSetState<TPage>;
	classes: TJSSClasses;

	constructor(page: TPage, setPage: TSetState<TPage>) {
		this.page = page;
		this.setPage = setPage;

		console.log('createNodeManager :>> ');
		jss.setup(preset());
		const myStyles: { [propName: string]: TJssStyle } = {};
		page.styles &&
			page.styles.forEach(({ id, data }) => {
				myStyles[id] = data;
			});
		this.classes = jss.createStyleSheet({ ...myStyles }).attach().classes;
	}
	getTree = (nodes: TNode[], _parentId: string | null) => {
		const viewNodes: IViewNode[] = nodes;
		return viewNodes.filter((node) => {
			if (node.parentId === _parentId) {
				node.childrens = this.getTree(
					nodes.filter(({ parentId }) => parentId !== _parentId),
					node.id
				);
			}
			return node;
		});
	};
	getNodeTree = (nodes: IViewNode[]) => this.getTree(nodes, null);

	createNode = (tag: string, parent: TNode | IViewNode, childrens: TNode[] | IViewNode[]) => {
		console.log('createTag');
		const newStyle: TStyle = createVariable(
			{},
			createUniqueName(
				'new_style',
				this.page.styles.map(({ name }) => name)
			)
		);
		this.setPage({
			...this.page,
			nodes: [
				...this.page.nodes,
				{
					id: shortid.generate(),
					parentId: parent.id,
					tag,
					index: (childrens && childrens.length) || 0,
					styleId: newStyle.id,
				},
			],
			styles: [...this.page.styles, newStyle],
		});
	};
	removeNode = (nodeId: string) => {
		const getAllChilds = (nodes: TNode[], nodeId: string) => {
			const newNodes: TNode[] = [];
			nodes
				.filter((child) => nodeId === child.parentId)
				.forEach((node) => {
					newNodes.push(node);
					newNodes.push.apply(newNodes, getAllChilds(nodes, node.id));
				});
			return newNodes;
		};
		const getNewNodes = (nodes: TNode[], nodeId: string) => {
			const deletedNodes = getAllChilds(nodes, nodeId);
			const node = nodes.find((item) => item.id === nodeId);
			node && deletedNodes.push(node);
			return nodes.filter((x) => !deletedNodes.includes(x));
		};
		this.setPage({ ...this.page, nodes: getNewNodes(this.page.nodes, nodeId) });
	};
	updateNode: IUpdateNode = (nodeId, propName, propValue) => {
		this.setPage({
			...this.page,
			nodes: this.page.nodes.map((_node) => (_node.id === nodeId ? { ..._node, [propName]: propValue } : _node)),
		});
	};
	getDefaultCssProps:IGetDefaultCssProps = (nodeId)=> {
		const element = document.getElementById(nodeId);
		if (element) {
			return Object.entries(getComputedStyle(element)).map(([_, cssProperty]) => ( cssProperty ));
		}
	};
}
