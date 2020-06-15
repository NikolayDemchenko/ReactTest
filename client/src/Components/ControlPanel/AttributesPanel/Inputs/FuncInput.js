import React from "react";
import SelectPanel from "../../SelectPanel/SelectPanel";
import PopupInput from "./PopupInput";
import { cssFunc } from "../../../Class/HtmlCss";
export default function FuncInput({ value, setValue, setPreview }) {
  // console.log("FuncInput");

  // const funcType = /^(?!\(.*\))[\w,\-]+/gm.exec(value)[0];
  const funcType = /^(?!\(.*\))[\w,-]+/gm.exec(value)[0];

  const funcInnerValue =
    /\(.*\)/gm.exec(value) &&
    /\(.*\)/gm.exec(value)[0].replace(/^\(|\)$/gm, "");

  const funcOuterValue =
    /(?!.*\)).+$/gm.exec(value) &&
    /(?!.*\)).+$/gm.exec(value)[0].replace(/^\s/gm, "");

  const updateFunc = (foo, oldvalue) => {
    return function (newvalue) {
      const newValue = value.replace(oldvalue, newvalue);
      foo(newValue);
    };
  };

  const setFuncType = updateFunc(setValue, funcType);

  const setInnerValue = updateFunc(setValue, funcInnerValue);

  const setInnerPreview = updateFunc(setPreview, funcInnerValue);
  const setOuterValue = updateFunc(setValue, funcOuterValue);

  const setOuterPreview = updateFunc(setPreview, funcOuterValue);

  const blockStyle = { border: "1px solid #ccc3", padding: "2px 6px" };

  return (
    <div style={{ color: "rgba(140, 200, 255, 0.8)", display: "inline-flex" }}>
      <div style={blockStyle}>
        <SelectPanel
          selectedItem={funcType}
          items={cssFunc.map((fnc) => fnc.value)}
          setItem={setFuncType}        
        /> 
      </div>
      {funcInnerValue && (
        <div style={blockStyle}>
          <PopupInput
            func={true}
            value={funcInnerValue}
            setValue={setInnerValue}
            setPreview={setInnerPreview}
          />
        </div>
      )}
      {funcOuterValue && (
        <div style={blockStyle}>
          <PopupInput
            func={true}
            value={funcOuterValue}
            setValue={setOuterValue}
            setPreview={setOuterPreview}
          />
        </div>
      )}
    </div>
  );
}
