import React from "react";
import StylePanel from "./StylePanel/StylePanel";
import jss from "jss";
import preset from "jss-preset-default";
import Select from "../ModalWindows/Select";
import { tags } from "../../Class/HtmlCss";
export default function VerticalPanel(props) {
  // console.log("---VerticalPanel---");
  const {
    controlPanel,
    setControlPanel,
    setPreview,
    selected,
    setSelected,
  } = props;
  const { setUnit, unit } = controlPanel;

  const setTag = ({ value: tag }) => {
    setUnit({ ...unit, tag });
    setPreview({ ...unit, tag });
    setControlPanel({
      ...controlPanel,
      unit: { ...unit, tag },
    });
    console.log("tag", tag);
  };
  const style = {
    flexWrap: "wrap",
    height: "100vh",
    minWidth: "280px",
    maxWidth: "280px",
    position: "fixed",
    zIndex: 1,
    top: 0,
    // left: 0,  
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
  return (
    <div
      className={classes.style}
      // onClick={() =>
      //   console.log("div", getComputedStyle(div, null).flexDirection)
      // }
    >
      <div
        style={{
          backgroundColor: "#456a",
        }}
      >
        <Select defaultItem={unit.tag} setItem={setTag} listItems={tags} />
      </div>
      <StylePanel {...props} selected={selected} setSelected={setSelected} />
      <div style={{height:"10vh"}}> Панель для настройки стиля элемента</div>
    </div>
  );
}
