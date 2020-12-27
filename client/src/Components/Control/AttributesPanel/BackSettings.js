import React,{useContext} from "react";
import {log,funcLog} from "../../../Log";
import jss from "jss";
import preset from "jss-preset-default";
import PopupInput from "./Inputs/PopupInput/PopupInput";
import {Context} from '../../../AppFunction'

const BackSettings = () => {
  // console.log("props :>> ", props.page.bodyStyle);
  const context = useContext(Context)
  const setPreview = (color) => {
    console.log('color', color)
    jss.setup(preset());
    const back = jss.createStyleSheet({ body: { background: color } }).attach();
    document.querySelector("body").classList.add(back.classes.body);
  };
  const setValue = (color) => {

    context.setPage((page) => {
      return { ...page, bodyStyle: { background: color } };
    });
  };
  return (
    <div
    title={context.page.bodyStyle["background"]}
      style={{
        overflow: "hidden",
        display: "flex",
        margin: "0.5em 0",paddingLeft: "0.5em",
        background: "rgba(30,40,57,.4)"
      }}
    >
      <div style={{ paddingRight: "2em" }}>Background</div>
      <PopupInput
        {...{
          value: context.page.bodyStyle["background"],
          setValue,
          setPreview,
        }}
        height="1em"
      />
    </div>
  );
};
export default React.memo(log(BackSettings));
