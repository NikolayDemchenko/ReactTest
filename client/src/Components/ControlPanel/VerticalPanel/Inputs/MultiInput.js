import React from "react";
import PopupInput from "./Popup/PopupInput";

export default function MultiInput({ value, setValue, setPreview }) {
  const arr = value.split(" ");
  console.log("MultiInput", arr);

  return arr.map((val, index) => {
    // Забота с запятой
    let comma = "";
    if (val.match(/,$/)) {
      comma = val.match(/,$/)[0];
      val = val.replace(/,$/, "");
    }

    const updateValue = (foo) => {
      return (newValue) => {
        if (index !== -1) {
          arr[index] = newValue + comma;
        }
        foo(arr.join(" "));
      };
    };

    let padding = "2px 6px";
    // Если есть обозначение цвета
    if (val.match(/#\w+|rgba|rgb/gm)) {
      padding = "0px 6px 6px";
    }

    return (
      <div
        key={index}
        style={{
          display: "inline-flex",
          border: "1px solid #ccc3",
          // margin: "2px",
          color: "rgba(140, 200, 255, 0.8)",
          textAlign: "center",
          padding,
        }}
      >
        <PopupInput
          funcTemplate={/^(?!^rgba\(.*\)|\d|@|\W).*\(.*\).*$/gm}
          value={val}
          setValue={updateValue(setValue)}
          setPreview={updateValue(setPreview)}
        />
      </div>
    );
  });
}
