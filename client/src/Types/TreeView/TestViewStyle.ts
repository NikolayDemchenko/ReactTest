import jss from 'jss';
import preset from 'jss-preset-default';
import { TJssStyle } from '../BaseTypes';

const nodeContainer = {
	display: 'grid',
	overflow: 'hidden',
	gridTemplateColumns: '60% 35% 1em',
	borderTop: '2px solid #55667766',
	height: '1.2em',
	'&:hover': { color: '#345' },
};
const listContainer = {
	borderTop: '4px solid rgba(140, 200, 255)',
	overflow: 'hidden',
	color: '#8CC8FF',
	boxShadow: '2px 10px 5px 2px #00000055',
	maxWidth: '280px',
	background: 'rgb(70,40,57)',
	// '&::-webkit-scrollbar': { width: '4px' },
	// '&::-webkit-scrollbar-thumb': { backgroundColor: '#567' },
};
const nodePropName = {
	marginLeft: '10px',
	// color: 'rgba(140, 200, 255, 0.8)',
	// backgroundColor: '#856c',
};
const nodePropValue = {
	marginLeft: '10px',
	// color: 'rgba(140, 200, 255, 0.8)',
	// backgroundColor: '#856c',
};

const listTitle = {
	marginLeft: '10px',
	// color: '#888c',
	// backgroundColor: 'rgba(140, 200, 255, 0.8)',
};
const nodeStyles: { [name: string]: TJssStyle } = {
	nodeContainer,
	nodePropName,
	nodePropValue,
	listContainer,
	listTitle,
};
jss.setup(preset());
export const { classes } = jss.createStyleSheet(nodeStyles).attach();
