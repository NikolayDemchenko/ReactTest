import React from "react";
import Popover from "../../../ModalWindows/PopoverPopupState";
import Paper from "./Paper";
export default function PopupInput(props) {
  return (
    <Popover
      PaperProps={{
        style: { background: "rgba(43,50,66,.95)", border: "1px solid #abc" },
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      {!props.value.match(/^#\w+|^rgba|^rgb/gm) ? (
        <div
          style={{
            cursor: "pointer",
            height: props.height,
            width: props.width,
          }}
        >
          {props.value ? props.value : "none"}
        </div>
      ) : (
        <div
          style={{
            cursor: "pointer",
            marginTop:"0.2em",
            height: "1em",
            width: "1.2em",
            backgroundColor:props.value
          }}
        />
      )}
      <Paper {...props} />
    </Popover>
  );
}
