import shortid from 'shortid';
import jss from 'jss';
import preset from 'jss-preset-default';
import { createVariable, createUniqueName } from '../../AppFunction';

// const getTree = (classes, nodes = [], _parentId) => {
// 	return nodes.filter((node) => {
// 		// node.className = classes[node.styleId];
// 		if (node.parentId === _parentId) {
// 			node.childrens = getTree(
// 				classes,
// 				nodes.filter(({ parentId }) => parentId !== _parentId),
// 				node.id
// 			);
// 			return node;
// 		}
// 	});
// };
export const TagManager = ({ page }, setState) => {
	//   console.log("page :>> ", page);
	jss.setup(preset());
	const myStyles = {};
	page.styles &&
		page.styles.forEach(({ id, data }) => {
			myStyles[id] = data;
		});

	const { classes } = jss.createStyleSheet({ ...myStyles }).attach();

	return {
		classes,
		// getTagTree: (nodes, pId) => getTree(classes, nodes, pId),
		createTag: (tag, parent, childrens) => {
			console.log('createTag');
			setState((state) => {
				const newStyle = createVariable(
					{},
					createUniqueName(
						'new_style',
						state.page.styles.map(({ name }) => name)
					)
				);
				return {
					...state,
					page: {
						...state.page,
						nodes: [
							...state.page.nodes,
							{
								id: shortid.generate(),
								parentId: parent.id,
								tag,
								index: (childrens && childrens.length) || 0,
								styleId: newStyle.id,
							},
						],
						styles: [...state.page.styles, newStyle],
					},
				};
			});
		},
		removeTag: (tagId) => {
			const getAllChilds = (nodes, nodeId) => {
				const newNodes = [];
				nodes
					.filter((child) => nodeId === child.parentId)
					.forEach((node) => {
						newNodes.push(node);
						newNodes.push.apply(newNodes, getAllChilds(nodes,node.id));
					});
				return newNodes;
			};
			const getNewNodes = (nodes, nodeId) => {
				const deletedNodes = getAllChilds(nodes,nodeId);
				deletedNodes.push(nodes.find((item) => item.id === nodeId));
				return nodes.filter((x) => !deletedNodes.includes(x));
			};	
			setState((state) => ({ ...state, page: { ...state.page, nodes: getNewNodes(state.page.nodes, tagId) } }));
		},
		updateTag: (nodeId, propName, propValue) => {
			setState((state) => ({
				...state,
				nodeId,
				page: {
					...state.page,
					nodes: page.nodes.map((_node) =>
						_node.id === nodeId ? { ..._node, [propName]: propValue } : _node
					),
				},
			}));
		},
	};
};
