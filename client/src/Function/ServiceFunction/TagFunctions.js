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
export const TagFunctions = (page, setPage, setSettings) => {
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
			setPage((page) => {
				const newStyle = createVariable(
					{},
					createUniqueName(
						'new_style',
						page.styles.map(({ name }) => name)
					)
				);
				return {
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
				};
			});
		},
		removeTag: (tagId) => {
			setSettings();
			setPage((page) => ({
				...page,
				nodes: page.nodes.filter((node) => node.id !== tagId),
			}));
		},
		updateTag: (nodeId, propName, propValue) => {
			setPage((page) => ({
				...page,
				nodes: page.nodes.map((_node) => {
					if (_node.id === nodeId) {
						const node = { ..._node, [propName]: propValue };
						setSettings((settings) => ({ ...settings, node }));
						return node;
					} else {
						return _node;
					}
				}),
			}));
		},
	};
};
