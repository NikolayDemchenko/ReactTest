import React from "react";
import Popover from "../../../ModalWindows/Popover";
import Paper from "./Paper";
import PropertyValueSelector from "../Switch/PropertyValueSelector";
export default function PopupInput(props) {
  // console.log('props.value :>> ',typeof props.value);
  // const type ="number"
  const type = PropertyValueSelector({ value: props.value });
  const width =
    type !== "number"
      ? "none"
      : props.value.length > 5
      ? `${props.value.length}em`
      : "5em";

  // console.log("type :>> ", type);
  // console.log("props :>> ", props);
  // console.log('props.onExit :>> ', props.onExit);
  return (
    <Popover
    // onExit={()=>console.log("Закрыто!!!!")}
    
      PaperProps={{
        style: {
          background: "rgba(43,50,66,.95)",
          border: "1px solid #678",
          width,
          overflow: "visible",
        },
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      {type !== "color" ? (
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
            marginTop: "0.2em",
            height: "1em",
            width: "1.2em",
            backgroundColor: props.value,
          }}
        />
      )}
      <Paper {...props} />
    </Popover>
  );
}
