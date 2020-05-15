import React from "react";
import { newDiv } from "../../Tag/Classes";
import StylePanel from "./StylePanel/StylePanel";
import Icon from "react-icons-kit";
import { plus } from "react-icons-kit/icomoon/plus";
import { cross } from "react-icons-kit/icomoon/cross";
import { StyleContext } from "../ControlsContext";
import jss from "jss";
import preset from "jss-preset-default";
import Select from "../ModalWindows/Select";
import { htmlTags } from "../../Class/HtmlCss";
export default function VerticalPanel() {
  const { controlPanel, setControlPanel } = React.useContext(StyleContext);
  const { tag, setTag } = controlPanel;

  const setTagType = ({ value: type }) => {
    setTag({ ...tag, type });
    setControlPanel({
      ...controlPanel,
      tag: { ...tag, type },
    });
    console.log("tag.type", type);
  };

  const addChildren = () => {
    console.log("tag", tag);
    // const childs = tag.childrens;
    tag.childrens.push({...newDiv});
    setTag({...tag});
    setControlPanel({...
      controlPanel,
      ...tag,
    });
  };

  const style = {
    flexWrap: "wrap",
    height: "100vh",
    minWidth: "280px",
    maxWidth: "280px",
    position: "fixed",
    zIndex: 999,
    top: 0,
    left: 0,
    // fontSize:"16px",
    overflowX: "auto",
    backgroundColor: "#456c",
    color: "rgba(140, 200, 255, 0.8)",
    boxShadow: "2px 10px 5px 2px #00000055",
    "&::-webkit-scrollbar": { width: "4px" },
    "&::-webkit-scrollbar-thumb": { backgroundColor: "#567" },
  };
  jss.setup(preset());
  const { classes } = jss
    .createStyleSheet({
      style,
    })
    .attach();
  // console.log('tag', tag)
  return (
    <div className={classes.style}>
      <div style={{ display: "flex" }}>
        <Select
          defaultItem={tag.type}
          setItem={setTagType}
          listItems={htmlTags}
        />
        <div
          style={{
            display: "flex",
            marginLeft: "auto",
          }}
        >
          <div
            title={"Добавить элемент"}
            style={{
              cursor: "pointer",
              width: "16px",
              margin: "0px 2px ",
              // border: "1px solid #fff",
            }}
            onClick={(e) => {
              e.stopPropagation();
              addChildren();
            }}
          >
            <Icon size={"100%"} icon={plus} />
          </div>
          <div
            title={"Закрыть панель"}
            style={{
              margin: "0px 2px ",
              cursor: "pointer",
              width: "14px",
            }}
            onClick={(e) => {
              e.stopPropagation();
              setControlPanel();
            }}
          >
            <Icon size={"100%"} icon={cross} />
          </div>
        </div>
      </div>
      <StylePanel />
      <div style={{ paddingBottom: "4em" }} />
    </div>
  );
}
