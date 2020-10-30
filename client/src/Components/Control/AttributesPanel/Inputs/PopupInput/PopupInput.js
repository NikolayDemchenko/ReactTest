import React from "react";
import Popover from "../../../ModalWindows/Popover";
import Paper from "./Paper";
import PropertyValueSelector from "../Switch/PropertyValueSelector";
export default function PopupInput(props) {
  // console.log('props.value :>> ',typeof props.value);
  // const type ="number"
  // console.log('props.value', props.value)
  const value = props.value ? props.value : "none";
  // console.log('new Boolean(value)', new Boolean(value))
  const type = PropertyValueSelector({ value });
  const width =
    type !== "number" ? "none" : value.length > 5 ? `${value.length}em` : "5em";

  // console.log("type :>> ", type);
  // console.log("props :>> ", props);
  // console.log('props.onExit :>> ', props.onExit);
  // console.log("value", value?value:"Хуй!!!!");
  return (
    <Popover    
      onEnter={() => {
        props.setPartPreview && props.setPartPreview();
        console.log("Открыто!");
      }}
      onExit={() => {
        props.setFullPreview && props.setFullPreview();
        console.log("Закрыто!");
      }}
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
          {value}
        </div>
      ) : (
        <div
          style={{
            cursor: "pointer",
            marginTop: "0.2em",
            height: "1em",
            width: "1.2em",
            backgroundColor: value,
          }}
        />
      )}
      <Paper {...props} />
    </Popover>
  );
}
