import React from "react";
import Popover from "../ModalWindows/Popover";
import Items from "./Items";
export default function SelectPanel(props) {
  return (
    <Popover
      PaperProps={{
        style: {
          borderRadius: "0",
          background: "transparent",
          // border: "1px solid #abc",
          color: "rgba(140, 200, 255, 0.8)",
      
          overflow: "visible",
        },
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <div style={{ cursor: "pointer" }}>
        {props.button ? props.button : props.selectedItem}
      </div>
      <Items {...props} />
    </Popover>
  );
}
