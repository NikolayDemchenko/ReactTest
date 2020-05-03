import React from "react";
import Select from "../../ModalWindows/Select";
import PopupInput from "../Inputs/PopupInput";
import { cssFunc } from "../../../Class/HtmlCss";
export default function FuncInput({ value, setValue, setPreview }) {
  console.log("FuncInput");
  const funcType = /^(?!\(.*\))[\w,\-]+/gm.exec(value)[0];
  const funcValue= /\(.*\)/gm.exec(value)[0].replace(/[\(\)]/gm,'');

//   const funcType = value.match(/^(?!\(.*\))[\w,\-]+/gm).join();
  // console.log('value', newVal.match(/[\w,\-]+/gm))
  console.log("funcValue", funcValue);
//   console.log("newVal", funcType);
//   console.log("value", value);
  const setFunc = () => {};
  return (
    <div
      style={{
        display: "inline-flex",
        border: "1px solid #ccc3",
        // margin: "2px",
        textAlign: "center",
        padding: "2px 6px",
      }}
    >
      <Select defaultItem={funcType} setItem={setFunc} listItems={cssFunc} />
      <PopupInput      
        value={funcValue}
        // setValue={setVal}
        // setPreview={setPrew}
      />
    </div>
  );
}
