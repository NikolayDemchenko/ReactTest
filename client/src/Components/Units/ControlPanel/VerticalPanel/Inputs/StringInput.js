import React from "react";
import Popover from "../../ModalWindows/PopoverPopupState";
export default function PopoverInput({ value, setValue }) {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setValue(event.target.value);
    }
  };


  return (
    <div style={{ display: "inline-flex" }}>
      <Popover
        PaperProps={{
          style: { background: "rgba(43,50,66,.95)", border: "1px solid #abc" },
        }}
      >
        <div
          style={{
            cursor: "pointer",
            height: "1em",
          }}
          // onClick={() => {
          //   input.onFocus();
          //   console.log("input", input);
          // }}
        >
          {value ? value : "none"}
        </div>
        <input
          style={{
            background: "transparent",
            width: `${value.length}ex`,
            minWidth: "160px",
            paddingLeft: "4px",
            outline: "none",
            border: 0,
            color: "#eee",
          }}
          type={"text"}     
          onKeyPress={handleKeyPress}
          onBlur={(e) => setValue(e.target.value)}
          defaultValue={value}
        />
      </Popover>
    </div>
  );
}
