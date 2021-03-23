import shortid from 'shortid';
import jss, { JssStyle } from 'jss';
import preset from 'jss-preset-default';
import { createVariable, createUniqueName } from '../../AppFunction';
import { IViewNode, INode, IPage, IStyle, INodeManager, TSetState, TJSSClasses } from '../../Types/BaseTypes';
import { IUpdateNode,IGetDefaultCssProps } from '../../Types/IFunctions';
export class NodeManager implements INodeManager {
	page: IPage;
	setPage: TSetState<IPage>;
	classes: TJSSClasses;

	constructor(page: IPage, setPage: TSetState<IPage>) {
		this.page = page;
		this.setPage = setPage;

		console.log('createNodeManager :>> ');
		jss.setup(preset());
		const myStyles: { [propName: string]: JssStyle } = {};
		page.styles &&
			page.styles.forEach(({ id, data }) => {
				myStyles[id] = data;
			});
		this.classes = jss.createStyleSheet({ ...myStyles }).attach().classes;
	}
	getTree = (nodes: INode[], _parentId: string | null) => {
		const viewNodes: IViewNode[] = nodes;
		return viewNodes.filter((node) => {
			if (node.parentId === _parentId) {
				node.childrens = this.getTree(
					nodes.filter(({ parentId }) => parentId !== _parentId),
					node.id
				);
				return node;
			}
		});
	};
	getNodeTree = (nodes: IViewNode[]) => this.getTree(nodes, null);

	createNode = (tag: string, parent: INode | IViewNode, childrens: INode[] | IViewNode[]) => {
		console.log('createTag');
		const newStyle: IStyle = createVariable(
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
		const getAllChilds = (nodes: INode[], nodeId: string) => {
			const newNodes: INode[] = [];
			nodes
				.filter((child) => nodeId === child.parentId)
				.forEach((node) => {
					newNodes.push(node);
					newNodes.push.apply(newNodes, getAllChilds(nodes, node.id));
				});
			return newNodes;
		};
		const getNewNodes = (nodes: INode[], nodeId: string) => {
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
