import React, { useState } from "react";
import Popover from "../../ModalWindows/PopoverPopupState";
import ModalInput from './Papaer'
export default function PopupInput(props) {


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
      >
        {props.value ? props.value : "none"}
      </div>
      <ModalInput {...props}/>
    </Popover>
  );
}
