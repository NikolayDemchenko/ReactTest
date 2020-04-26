import React from "react";
import Popover from "../../ModalWindows/PopoverPopupState";
import PropertyInputSwitch from "../StylePanel/Switch/PropertyInputSwitch";
export default function PopoverInput({ value, setValue, setPreview }) {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setValue(event.target.value);
    }
  };
  return (
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
        onClick={() => {}}
      >
        {value ? value : "none"}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "#eee",
        }}
      >
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
        <PropertyInputSwitch
          value={value}
          setValue={setValue}
          setPreview={setPreview}
        />
      </div>
    </Popover>
  );
}
