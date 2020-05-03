import React from "react";
// import { StyleContext } from "../../ControlsContext";
import PopupInput from "../Inputs/PopupInput";

export default function MultiInput({ value, setValue, setPreview }) {
  const arr = value.split(" ");
  // console.log("value.split(' ')", arr);
  console.log("arr.join(' ')", arr.join(" "));

  return arr.map((val, index) => {
    const setData = (newValue) => {
      if (index !== -1) {
        arr[index] = newValue;
      }
      setValue(arr.join(" "));
      console.log("arr", arr);
    };
    const setVal = (newValue) => {
      if (index !== -1) {
        arr[index] = newValue;
      }
      setValue(arr.join(" "));
      // console.log('setValue', arr)
    };
    const setPrew = (newValue) => {
      if (index !== -1) {
        arr[index] = newValue;
      }
      setPreview(arr.join(" "));
      console.log("setPreview", arr.join(" "));
    };
    return (
      <div
        key={index}
        style={{
          display: "inline-flex",
          border: "1px solid #ccc3",
          // margin: "2px",
          padding: "2px 6px",
        }}
      >
        <PopupInput value={val} setValue={setVal} setPreview={setPrew} />
      </div>
    );
  });
}
