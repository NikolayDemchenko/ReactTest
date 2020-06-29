import { v4 as uuidv4 } from "uuid";

const _newStyle = {
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
const newPageStyle = { style: _newStyle, id: uuidv4(), name: "newStyle" };

const innerStyle = {
  height: "200px",
  width: "200px",
  backgroundColor: "#789",
  margin: "10px",
  // marginBottom: "10px",
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

const pageBaseDiv = {
  index:0,
  id: uuidv4(),
  parentId: null,
  type: "div",
  styleId: basePageStyle.id,
  attributes: {},
};

const pageInnerDiv = {
  type: "div",
  styleId: innerPageStyle.id,
  attributes: {},
};
const newStyle = { style: {}, id: uuidv4(), name: "newStyle" };

const page = {
  styles: [basePageStyle, innerPageStyle, newPageStyle, newStyle],
  tags: [],
};
page.tags.push(pageBaseDiv);

for (let i = 0; i < 9; i++) {
  pageInnerDiv.index = i;
  pageInnerDiv.id = uuidv4();
  pageInnerDiv.parentId = pageBaseDiv.id;
  page.tags.push(JSON.parse(JSON.stringify(pageInnerDiv)));
}

export { page };
