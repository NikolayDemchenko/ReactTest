import React, { useState } from "react";
import log from "../../../../Log";
import {
  deleteObjectProps,
  deleteNoObjectProps,
} from "./Function/ObjectManager";
function EditPanel(props) {
  const { style, setStyle } = props;

  // console.log("%cPropertiesPanel-StylePanel", "color: green");
  // console.log("props :>> ", props);
  const convertObjToCss = (_obj) => {
    const obj = { ..._obj };
    let cssString;
    for (let name in obj) {
      const capLetters = name.match(/[A-Z]/gm);
      let cssName = name;
      capLetters &&
        capLetters.forEach((cLt) => {
          cssName = cssName.replace(cLt, `-${cLt.toLowerCase()}`);
      
        });      
      !cssString
        ? (cssString = `${cssName}:${obj[name]}; `)
        : (cssString += `${cssName}:${obj[name]}; `);
    }
    return cssString;
  };

  const convertCssToObj = (cssString) => {
    const style = {};
    const arr = cssString.match(/\w.*?;/gm);
    console.log('arr', arr)
    arr &&
      arr.forEach((element) => {  
        let name=element.match(/[-\w]*?(?=:)/gm)[0]
        const value=element.match(
          /(?<=:).*?(?=;)/gm
        )[0];
        style[name] = value.replace(/(?<=[:,])\s/gm,'').trim()
        //(?<=^\w+)-\w
        console.log('name', name)
        console.log('value', style[name])
      });
    return style;
  };

  return (
    <textarea
      onKeyPress={(e) => {
        e.stopPropagation();
        if (e.key === "Enter") {
          setStyle({
            ...deleteNoObjectProps(style),
            ...convertCssToObj(e.target.value),
          });
          // console.log("e", e.target.value);
        }
      }}
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
      defaultValue={convertObjToCss(deleteObjectProps(style))}
    />
  );
}
export default EditPanel;
// export default log(EditPanel)
