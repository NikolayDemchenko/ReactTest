import React, { useState } from "react";
import Popover from "../../ModalWindows/PopoverPopupState";
import Paper from './Paper'
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
          height:props.height,        
        }}
      >
        {props.value ? props.value : "none"}
      </div>
      <Paper {...props}/>
    </Popover>
  );
}
