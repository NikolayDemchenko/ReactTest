import React from "react";
import StylePanel from "./StylePanel/StylePanel";
import { StyleContext } from "../ControlsContext";
import jss from "jss";
import preset from "jss-preset-default";
import Select from "../ModalWindows/Select";
import { htmlTags } from "../../Class/HtmlCss";
export default function VerticalPanel() {
  const { controlPanel, setControlPanel } = React.useContext(StyleContext);
  const {
    tag,
    setTag,
    // , setPreview
  } = controlPanel;

  const setTagType = ({ value: tagType }) => {
    setTag({ ...tag, tagType });
    // setPreview({ ...tag, tagType });
    setControlPanel({
      ...controlPanel,
      tag: { ...tag, tagType },
    });
    console.log("tagType", tagType);
  };
  const style = {
    flexWrap: "wrap",
    height: "100vh",
    minWidth: "280px",
    maxWidth: "280px",
    position: "fixed",
    zIndex: 1,
    top: 0,
    fontSize:"16px",
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
      <div
        style={{
          backgroundColor: "#456a",
        }}
      >
        <Select
          defaultItem={tag.tagType}
          setItem={setTagType}
          listItems={htmlTags}
        />
      </div>
      <StylePanel />
      <div style={{paddingBottom:"4em"}}/> 
    </div>
  );
}
