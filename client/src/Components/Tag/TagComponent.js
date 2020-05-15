import React from "react";
import TagChildrens from "./TagChildrens";
import jss from "jss";
import preset from "jss-preset-default";
import { PageContext } from "../ControlPanel/ControlsContext";
export default function TagComponent(props) {
  // console.log('childrens', tag.childrens)

  const { clearPanel, setclearPanel } = React.useContext(PageContext);

  const { tag, setTag, preview, setPreview, setControlPanel } = props;
  const view = preview ? preview : tag;
  const { style } = view;

  // console.log("tag.style", tag.style);

  jss.setup(preset());
  const { classes } = jss
    .createStyleSheet({
      style,
    })
    .attach();

  const setPanel = () => {
    clearPanel && clearPanel.setControlPanel();
    // console.log("clearPanel", clearPanel);
    setclearPanel({ setControlPanel });
    const controlPanel = { tag, setTag, setPreview };
    setControlPanel(controlPanel);

    // console.log("Передача данных в панель управления", new Date(), controlPanel);
  };

  return (
    <>
      <view.type
        className={classes.style}
        onClick={(e) => {
          e.stopPropagation();
          console.log("Клик");
          setPanel();
        }}
      >
        <TagChildrens {...props} />
      </view.type>
      {/* <div style={{ height: "300px", width: "100%", background: "#457" }}></div> */}
    </>
  );
}
