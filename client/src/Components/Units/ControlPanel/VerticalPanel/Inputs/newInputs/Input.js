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
  const [modal, setmodal] = useState();
  console.log('modal.clientX', (modal && modal.clientX))
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
        onClick={(e) => {
          console.log("e.clientY", e.clientY);
          setmodal({...e});
        }}
        onBlur={() => {
          console.log("onBlur");
          setmodal();
        }}
      >
        {value ? value : "none"}
      </div>
      <ModalWindow>
        {modal && (
          <div
            style={{
              border: "1px solid #ccc",
              position: "absolute",
              top: `${modal.clientY}px`,
              left: `${modal.clientX}px`,
              boxShadow: "0 8px 5px 2px #0005",
              display: "flex",
              flexDirection: "column",
              color: "#eee",
              zIndex: "999",
            }}
            onBlur={() => setmodal()}
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
            <div style={{ backgroundColor: "#123" }}>
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
