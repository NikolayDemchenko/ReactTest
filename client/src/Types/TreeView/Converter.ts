import { TNode } from '../BaseTypes';
import {
  IVariable,
  TProperties,
} from './TreeView';

interface IPageNodesToTreeNodeArray {
	(pageNodes: TNode[]): IVariable[];
}
interface IStyleToTreeNodeArray {
	(obj: TProperties): IVariable[];
}


// export const StyleToTreeNodes: IStyleToTreeNodeArray = (style) => {
// 	const list: IVariable[] = [];
// 	Object.keys(style).forEach((name) => {
// 		if (typeof style[name] !== 'string' && typeof style[name] !== 'number' && typeof style[name] !== 'boolean') {
// 			list.push({
// 				name,
// 				value:  StyleToTreeNodes(style[name] as TProperties),
// 			});
// 		} else {
// 			list.push({ name, value: style[name] });
// 		}
// 	});
// 	// console.log(`list`, list);
// 	return list;
// };

// export const PageNodesToTreeNodes: IPageNodesToTreeNodeArray = (pageNodes) => {
// 	const getTree = (pageNodes: TNode[], parentId: string | null) => {
// 		const list: IVariable[]=[];
// 		pageNodes.forEach((node) => {
// 			if (node.parentId === parentId) {			
// 				const items = getTree(
// 					pageNodes.filter((node) => node.parentId !== parentId),
// 					node.id
// 				);
// 				list.push({name: 'id', value:node.id});				
// 				list.push({name: 'nodes', value:{items}});				
// 			}
// 		});
// 		// console.log(`list`, list);
// 		return list;
// 	};
// 	// console.log(`arr`, arr);
// 	return getTree(pageNodes, null);
// };
