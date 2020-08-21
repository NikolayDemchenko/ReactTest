import shortid from "shortid";
import { createStyle } from "../../../../AppFunction";

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
const newPageStyle = createStyle(newStyle, "newStyle");

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

const innerPageStyle = createStyle(innerStyle, "innerStyle");

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

const basePageStyle = createStyle(baseStyle, "baseStyle");

const pageBaseDiv = {
  index: 0,
  // id: uuidv4(),
  id: shortid.generate(),
  parentId: null,
  type: "div",
  styleId: basePageStyle.id,
  attributes: {},
};

const component = {
  styles: [basePageStyle, innerPageStyle, newPageStyle],
  tags: [],
};
component.tags.push(pageBaseDiv);

for (let i = 0; i < 9; i++) {
  component.tags.push(
    JSON.parse(
      JSON.stringify({
        index: i,
        // id: uuidv4(),
        id: shortid.generate(),
        parentId: pageBaseDiv.id,
        type: "div",
        styleId: innerPageStyle.id,
        attributes: {},
      })
    )
  );
}

export { component, createStyle };
