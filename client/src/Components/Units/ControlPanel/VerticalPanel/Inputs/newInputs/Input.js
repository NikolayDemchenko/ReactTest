import React, { useState } from "react";
import Popover from "../../../ModalWindows/PopoverPopupState";
import ModalWindow from "../../../ModalWindows/ModalWindow";
import PropertyInputSwitch from "./Switch/PropertyInputSwitch";
export default function Input({ value, setValue, setPreview }) {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setValue(event.target.value);
    }
  };
  const setVal = (value) => {
    settisVal(value);
    setValue(value);
  };
  const [val, settisVal] = useState(value);
  const [coordinates, setcoordinates] = useState();
  console.log("modal.clientX", coordinates && coordinates);
  let div;
  return (
    <>
      {/* <Popover
        PaperProps={{
          style: { background: "rgba(43,50,66,.95)", border: "1px solid #abc" },
        }}
      > */}
      <div
        style={{
          cursor: "pointer",
          height: "1em",
        }}
        ref={(ref) => (div = ref)}
        onClick={(e) => {
          console.log("div", div.getBoundingClientRect());
          console.log("e.clientY", e.clientY);
          setcoordinates(div.getBoundingClientRect());
        }}
        onBlur={() => {
          console.log("onBlur");
          setcoordinates();
        }}
      >
        {value ? value : "none"}
      </div>
      <ModalWindow>
        {coordinates && (
          <div
            style={{
              padding: " 2px 0",
              background: "rgba(43,50,66,.95)",
              //  border: "1px solid #abc",
              borderRadius: "4px",
              position: "fixed",
              top: `${coordinates.y}px`,
              left: `${coordinates.x}px`,
              boxShadow: "0 0 2px 1px #ccc",
              display: "flex",
              flexDirection: "column",
              color: "#eee",
              zIndex: "999",
            }}
            // onBlur={() => setmodal()}
            // onMouseOut={() => setmodal()}
          >
            <input
              style={{
                background: "transparent",
                width: `${value.length}ex`,
                minWidth: "80px",
                paddingLeft: "4px",
                outline: "none",
                border: 0,
                color: "#eee",
              }}
              type={"text"}
              onKeyPress={handleKeyPress}
              onBlur={(e) => setValue(e.target.value)}
              value={val}
              onChange={(e) => settisVal(e.target.value)}
              // defaultValue={value}
            />
            <div style={{ backgroundColor: "#234c" }}>
              <PropertyInputSwitch
                value={value}
                setValue={setVal}
                setPreview={setPreview}
              />
            </div>
          </div>
        )}
      </ModalWindow>
      {/* </Popover> */}
    </>
  );
}
