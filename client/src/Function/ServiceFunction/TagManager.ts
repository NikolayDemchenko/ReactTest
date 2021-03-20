import shortid from 'shortid';
import jss from 'jss';
import preset from 'jss-preset-default';
import { createVariable, createUniqueName } from '../../AppFunction';
import { IViewNode, INode, IPage, IStyle, ITagManager } from '../../Types/BaseTypes';
// import { IUpdateProp } from '../../Types/InterfacesOfFunctions';

const getTree = (nodes: INode[] = [], _parentId: string | null) => {
	const viewNodes: IViewNode[] = nodes;
	return viewNodes.filter((node) => {
		if (node.parentId === _parentId) {
			node.childrens = getTree(
				nodes.filter(({ parentId }) => parentId !== _parentId),
				node.id
			);
			return node;
		}
	});
};

export const createTagManager = (page: IPage, setPage: React.Dispatch<React.SetStateAction<IPage>>):ITagManager => {
	console.log('TagManager :>> ');
	jss.setup(preset());
	const myStyles: { [k: string]: any } = {};
	page.styles &&
		page.styles.forEach(({ id, data }) => {
			myStyles[id] = data;
		});

	const { classes } = jss.createStyleSheet({ ...myStyles }).attach();

	return {
		classes,
		getTagTree: (nodes: IViewNode[]) => getTree(nodes, null),

		createTag: (tag: string, parent: INode | IViewNode, childrens: INode[] | IViewNode[]) => {
			console.log('createTag');
			const newStyle: IStyle = createVariable(
				{},
				createUniqueName(
					'new_style',
					page.styles.map(({ name }) => name)
				)
			);
			setPage({
				...page,
				nodes: [
					...page.nodes,
					{
						id: shortid.generate(),
						parentId: parent.id,
						tag,
						index: (childrens && childrens.length) || 0,
						styleId: newStyle.id,
					},
				],
				styles: [...page.styles, newStyle],
			});
		},
		removeTag: (tagId: string) => {
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
			setPage({ ...page, nodes: getNewNodes(page.nodes, tagId) });
		},
		updateTag:(nodeId: string, propName: string, propValue: string | number | object) => {
			setPage({
				...page,
				nodes: page.nodes.map((_node) => (_node.id === nodeId ? { ..._node, [propName]: propValue } : _node)),
			});
		},
	};
};
