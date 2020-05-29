import { v4 as uuidv4 } from "uuid";

const newStyle = {
  height: "200px",
  width: "200px",
  backgroundColor: "#678",
  marginTop: "10px",
  marginBottom: "10px",
  "&:hover": {
    boxShadow: "0 8px 5px 2px #0005, inset 0 8px 5px 2px #00ffff",
    transition: "0.2s",
  },
  "&:active": {
    transition: "0s",
    boxShadow: "none",
  },
};
const newPageStyle = { style: newStyle, id: uuidv4(), name: "newStyle" };
const newDiv = {
  type: "div",
  style: newStyle,
  attributes: {},
};
const innerStyle = {
  height: "200px",
  width: "200px",
  backgroundColor: "#789",
  margin: "10px",
  marginBottom: "10px",
  "&:hover": {
    transform: "perspective(200px) scaleZ(-0.5) translateZ(-2px)",
    boxShadow: "0 8px 5px 2px #0005, inset 0 8px 5px 2px #00ffff",
    transition: "0.2s",
  },
  "&:active": {
    transition: "0s",
    boxShadow: "none",
  },
};
const innerPageStyle = { style: innerStyle, id: uuidv4(), name: "innerStyle" };
const innerDiv = {
  type: "div",
  style: innerStyle,
  attributes: {},
};
const childs = [];
for (let i = 0; i < 100; i++) {
  childs.push(JSON.parse(JSON.stringify(innerDiv)));
}

const baseStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  alignSelf: "center",
  height: "700.55px",
  width: "700px",
  backgroundColor: "#567",
  margin: "auto",
  marginTop: "60px",
  marginBottom: "60px",
  "@media (max-width: 800px)": {
    width: "200px",
  },
  "&:hover": {
    transform: "perspective(200px) scaleZ(-0.5) translateZ(-2px)",
    boxShadow: "0 8px 5px 2px #0005, inset 0 8px 5px 2px #00ffff",
    transition: "0.2s",
    marginBottom: "60px",
    "@media (max-width: 800px)": {
      width: "200px",
    },
  },
  "&:active": {
    height: "700px",
    width: "700px",
    transition: "0s",
    boxShadow: "none",
    marginBottom: "60px",
    "@media (max-width: 800px)": {
      width: "200px",
    },
  },
};
const basePageStyle = { style: baseStyle, id: uuidv4(), name: "baseStyle" };
const baseDiv = {
  type: "div",
  style: baseStyle,
  childrens: childs,
  attributes: {},
};

const pageBaseDiv = {
  id: uuidv4(),
  index: 0,
  parentId: null,
  type: "div",
  styleId: basePageStyle.id,
  attributes: {},
};

const pageInnerDiv = {
  id: uuidv4(),
  parentId: pageBaseDiv.id,
  type: "div",
  styleId: innerPageStyle.id,
  attributes: {},
};

const page = {
  styles: [basePageStyle, innerPageStyle, newPageStyle],
  tags: [],
};
page.tags.push(pageBaseDiv);
for (let i = 0; i < 200; i++) {
  pageInnerDiv.index = i;
  page.tags.push(JSON.parse(JSON.stringify(pageInnerDiv)));
}

const div = baseDiv;

export { newDiv, div, page };