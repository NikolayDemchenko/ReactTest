import React from "react";
import TagChildrens from "./TagChildrens";
import jss from "jss";
import preset from "jss-preset-default";
import { PageContext } from "../ControlPanel/ControlsContext";
function TagComponent(props) {
 

  const { clearPanel, setclearPanel } = React.useContext(PageContext);

  const { tag, setTag, preview, setPreview, setControlPanel } = props;
  const view = preview ? preview : tag;

  // const _tag = React.useMemo(() => {
  //   return <Tag {...props} tag={children} setTag={setChildren} />;
  // }, []);


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
  
  console.log("3-TagComponent")
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
function areEqual(prevProps, nextProps) {
  // prevProps.tag===nextProps.tag?console.log("%cравно", 'border:solid 1px #e33; color: #333'):console.log("%cне равно!!!!!!!!!!!!!!!!", 'color: #f33')
  return prevProps.tag===nextProps.tag&&prevProps.preview===nextProps.preview?true:false
   }
 export default React.memo(TagComponent,areEqual);
// export default React.memo(TagComponent)
// export default TagComponent