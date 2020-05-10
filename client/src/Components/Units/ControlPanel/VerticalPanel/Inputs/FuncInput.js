import React from "react";
import Select from "../../ModalWindows/Select";
import PopupInput from "./Popup/PopupInput";
import { cssFunc } from "../../../Class/HtmlCss";
export default function FuncInput({ value, setValue, setPreview }) {
  // console.log("FuncInput");
  
  const funcType = /^(?!\(.*\))[\w,\-]+/gm.exec(value)[0];

  const funcInnerValue =/\(.*\)/gm.exec(value)&& /\(.*\)/gm.exec(value)[0].replace(/^\(|\)$/gm, "");

  const funcOuterValue =/(?!.*\)).+$/gm.exec(value)&& /(?!.*\)).+$/gm.exec(value)[0].replace(/^\s/gm, "")

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
    <div
      style={{
        display: "inline-flex",
      }}
    >
      <div style={blockStyle}>
        <Select
          defaultItem={funcType}
          setItem={(i) => setFuncType(i.value)}
          listItems={cssFunc}
        />
      </div>
      {funcInnerValue && (
        <div style={blockStyle}>
          <PopupInput
            value={funcInnerValue}
            setValue={setInnerValue}
            setPreview={setInnerPreview}
          />
        </div>
      )}
      {funcOuterValue && (
        <div style={blockStyle}>
          <PopupInput
            value={funcOuterValue}
            setValue={setOuterValue}
            setPreview={setOuterPreview}
          />
        </div>
      )}
    </div>
  );
}
