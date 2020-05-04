import React from "react";
import Select from "../../ModalWindows/Select";
import PopupInput from "./Popup/PopupInput";
import { cssFunc } from "../../../Class/HtmlCss";
export default function FuncInput({ value, setValue, setPreview }) {
  console.log("FuncInput");
  const funcType = /^(?!\(.*\))[\w,\-]+/gm.exec(value)[0];
  const funcInnerValue = /\(.*\)/gm.exec(value)[0].replace(/[\(\)]/gm, "");
  const funcOuterValue = /(?!.*\)).+$/gm.exec(value)[0].replace(/^\s/gm, "");

  //   const funcType = value.match(/^(?!\(.*\))[\w,\-]+/gm).join();
  // console.log('value', newVal.match(/[\w,\-]+/gm))
  console.log("funcType", funcType);
  console.log("funcInnerValue", funcInnerValue);
  console.log("funcOuterValue", funcOuterValue);
  //   console.log("value", value);
  const setFunc = () => {};
  const blockStyle={ border: "1px solid #ccc3", padding: "2px 6px" }
  return (
    <div
      style={{
        display: "inline-flex",
        // border: "1px solid #ccc3",
        // margin: "2px",
        // textAlign: "center",
        // padding: "0px 6px",
      }}
    >
    
      <div style={blockStyle}>
        <Select defaultItem={funcType} setItem={setFunc} listItems={cssFunc} />
      </div>
      {funcInnerValue && (
        <div style={blockStyle}>
          <PopupInput
            value={funcInnerValue}
            // setValue={setVal}
            // setPreview={setPrew}
          />
        </div>
      )}
      {funcOuterValue && (
        <div style={blockStyle}>
          <PopupInput
            value={funcOuterValue}
            // setValue={setVal}
            // setPreview={setPrew}
          />
        </div>
      )}
    </div>
  );
}
