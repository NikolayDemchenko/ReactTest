import React from "react";
import SelectPanel from "./ModalInput/SelectPanel/SelectPanel";
import PopupInput from "./ModalInput/PopupInput/PopupInput";
import { cssFunc } from "../../Class/HtmlCss";
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

  const updateFunc = (oldvalue, foo1, foo2) => {
    return function (newvalue) {
      // console.log("newvalue", newvalue);
      const newValue = value.replace(oldvalue, newvalue);
      foo1 && foo1(newValue);
      foo2 && foo2(newValue);
    };
  };

  const setFuncType = updateFunc(funcType, setValue, setPreview);

  const setInnerValue = updateFunc(funcInnerValue, setValue);

  const setInnerPreview = updateFunc(funcInnerValue, setPreview);
  const setOuterValue = updateFunc(funcOuterValue, setValue);

  const setOuterPreview = updateFunc(funcOuterValue, setPreview);

  const blockStyle = { border: "1px solid #ccc3", padding: "2px 6px" };

  return (
    <div style={{ color: "rgba(140, 200, 255, 0.8)", display: "inline-flex" }}>
      <div style={blockStyle}>
        <SelectPanel
          selected={funcType}
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
