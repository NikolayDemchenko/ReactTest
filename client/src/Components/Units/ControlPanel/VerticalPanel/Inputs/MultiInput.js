import React from "react";
import PopupInput from "./Popup/PopupInput";

export default function MultiInput({ value, setValue, setPreview }) {
  const arr = value.split(" ");
  // console.log("arr", arr);

  return arr.map((val, index) => {
    // Забота с запятой
    let comma = "";
    if (val.match(/,$/)) {
      comma = val.match(/,$/)[0];
      val = val.replace(/,$/, "");
    }

    const setVal = (newValue) => {
      if (index !== -1) {
        arr[index] = newValue + comma;
      }
      setValue(arr.join(" "));
    };
    const setPrew = (newValue) => {
      if (index !== -1) {
        arr[index] = newValue + comma;
      }
      setPreview(arr.join(" "));
    };
    let width;
    // Если есть обозначение цвета
    if (val.match(/#\w+|rgba|rgb/gm)) {
      width = "10em";
    }

    return (
      <div
        key={index}
        style={{
          display: "inline-flex",
          border: "1px solid #ccc3",
          // margin: "2px",
          textAlign: "center",
          padding: "2px 6px",
        }}
      >
        <PopupInput
          width={width}
          value={val}
          setValue={setVal}
          setPreview={setPrew}
        />
      </div>
    );
  });
}
