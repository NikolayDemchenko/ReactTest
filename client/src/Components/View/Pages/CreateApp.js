import shortid from "shortid";
import { createStyle } from "../../../AppFunction";

const app = {
  pageIds: ["1", "2", "3", "4", "5"],
};

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
const newTagStyle = createStyle(newStyle, "newStyle");

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

const childTagStyle = createStyle(innerStyle, "innerStyle");

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

const rootTagStyle = createStyle(baseStyle, "baseStyle");

const rootTagGenerator = (parentId, index, type, styleId) => ({
  index,
  id: shortid.generate(),
  parentId,
  type,
  styleId,
});

const rootTag_1 = rootTagGenerator(null, 0, "div", rootTagStyle.id);
const rootTag_2 = rootTagGenerator(null, 1, "div", rootTagStyle.id);

const bodyStyle = {
  background: "#3b485d",
};

const page = {
  bodyStyle,
  styles: [rootTagStyle, childTagStyle, newTagStyle],
  tags: [],
};
page.tags.push(rootTag_1);
page.tags.push(rootTag_2);

const childGenerator = (amount, tag, childStyle) => {
  for (let i = 0; i < amount; i++) {
    page.tags.push(
      JSON.parse(
        JSON.stringify({
          index: i,
          id: shortid.generate(),
          parentId: tag.id,
          type: "div",
          styleId: childStyle.id,
          attributes: {},
        })
      )
    );
  }
};

childGenerator(8, rootTag_1, childTagStyle);
childGenerator(200, rootTag_2, childTagStyle);

export { page, createStyle };
