import React from "react";
import Popover from "../../ModalWindows/PopoverPopupState";
export default function PopoverInput({ value, setValue }) {
  const handleKeyPress = event => {
    if (event.key === "Enter") {
      setValue(input.value);
    }
  };
  let input;
  return (
    <div style={{ display: "inline-flex" }}>
      <Popover
        PaperProps={{
          style: { background: "rgba(43,50,66,.95)", border: "1px solid #abc" }
        }}
      >
        <div
          style={{
            overflow: "hidden",
            padding: "0px 5px",
            cursor: "pointer",
            minWidth: "10px",
            maxWidth: "80px",
            height: "20px"
          }}
        >
          {value ? value : "none"}
        </div>
        <input
          style={{
            background: "transparent",
            width: "200px",
            paddingLeft: "4px",
            outline: "none",
            border: 0,
            color: "#eee"
          }}
          type={"text"}
          ref={n => (input = n)}
          onKeyPress={handleKeyPress}
          onBlur={() => setValue(input.value)}
          defaultValue={value}
        />
      </Popover>
    </div>
  );
}
