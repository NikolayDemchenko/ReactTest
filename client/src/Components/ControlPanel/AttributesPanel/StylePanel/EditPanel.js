import React, { useState } from "react";
import log from "../../../../Log";
import { clearObject } from "./Function/ObjectManager";
function EditPanel(props) {
  const { style } = props;

  // console.log("%cPropertiesPanel-StylePanel", "color: green");
  // console.log("props :>> ", props);
  const createCSSfromJSS = (_jss) => {
    const jss = { ..._jss };
    let cssString;
    for (let key in jss) {
      !cssString
        ? (cssString = `${key}:${jss[key]}; `)
        : (cssString += `${key}:${jss[key]}; `);
    }
    return cssString;
  };
  const createJSSfromCSS = (cssString) => {
    const style={}
    cssString.match(/\w.*?;/gm).forEach((element) => {
      element.match(/(?<=:).*?(?=;)/gm)
      style[element.match(/\w*?(?=:)/gm)[0]]=element.match(/(?<=:).*?(?=;)/gm)[0]
      // console.log("element", element.match(/\w*?(?=:)/gm)[0]);
      // console.log("element", element.match(/(?<=:).*?(?=;)/gm)[0]);
    });
    return style;
  };

  console.log('createJSSfromCSS(createCSSfromJSS(clearObject(style)))', createJSSfromCSS(createCSSfromJSS(clearObject(style))))

  return (
    <textarea
      style={{
        minHeight: "10rem",
        fontFamily: "'Lucida Sans Unicode', 'Lucida Grande', sans-serif",
        width: "95%",
        padding: "2px 6px",
        border: "1px solid #678",
        // wordBreak: "break-all",
        background: "transparent",
        color: "inherit",
        // border: "1px solid #fff",
      }}
      defaultValue={createCSSfromJSS(clearObject(style))}
    />
  );
}
export default EditPanel;
// export default log(EditPanel)
