import jss from 'jss';
import preset from 'jss-preset-default';

import { TJssStyle } from '../BaseTypes';

const listContainer = {
  borderTop: "4px solid rgba(140, 200, 255)",
  overflow: "hidden",
  color: "#8CC8FF",
  boxShadow: "2px 10px 5px 2px #00000055",
  maxWidth: "280px",
  background: "#253446",
  // '&::-webkit-scrollbar': { width: '4px' },
  // '&::-webkit-scrollbar-thumb': { backgroundColor: '#567' },
};
const listTitle = {
  marginLeft: "10px",
  // color: '#888c',
  // backgroundColor: 'rgba(140, 200, 255, 0.8)',
};
const nodeContainer = {
  //   display: "grid",
  //   overflow: "hidden",
  gridTemplateColumns: "60% 35% 1em",
  borderTop: "5px solid #55667766",
  //   height: "1.2em",
  //   "&:hover": { color: "#345" },
};
const propContainer = {
  display: "grid",
  overflow: "hidden",
  gridTemplateColumns: "60% 35% 1em",
  borderTop: "1px solid #55667766",
  height: "1.2em",
  "&:hover": { background: "#303957" },
};
const hoverTextColor = "#fff";
const propName = {
  cursor: "pointer",
  marginLeft: "10px",
  "&:hover": { color: hoverTextColor },
  // color: 'rgba(140, 200, 255, 0.8)',
  // backgroundColor: '#856c',
};
const propValue = {
  cursor: "pointer",
  marginLeft: "10px",
  "&:hover": { color: hoverTextColor },
  // color: 'rgba(140, 200, 255, 0.8)',
  // backgroundColor: '#856c',
};

const nodeStyles: { [name: string]: TJssStyle } = {
  listContainer,
  listTitle,
  nodeContainer,
  propContainer,
  propName,
  propValue,
};
jss.setup(preset());
export const { classes } = jss.createStyleSheet(nodeStyles).attach();
