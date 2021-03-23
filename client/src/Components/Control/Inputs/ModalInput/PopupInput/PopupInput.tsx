import React, { FC } from "react";
import Popover from "../Popover";
import Paper from "./Paper";
import DataTypeRecognizer from "../Switch/DataTypeRecognizer";
import {IPopupInput} from '../../../../../Types/IProps'

 const PopupInput:FC<IPopupInput>=(props) =>{
	console.log('PopupInput :>> ');
  const {height, width, onEnter, onExit}=props
  const value = props.value ? props.value : "none";
  const type = DataTypeRecognizer({ value });
  const paperWidth =
    type !== "number" ? "none" : value.length > 5 ? `${value.length}em` : "5em";


  return (
    <Popover    
      onEnter={() => {
       onEnter && onEnter();
        console.log("Открыто!");
      }}
      onExit={() => {
        onExit && onExit();
        console.log("Закрыто!");
      }}
      PaperProps={{
        style: {
          background: "rgba(43,50,66,.95)",
          border: "1px solid #678",
          width:paperWidth,
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
            height,
            width,
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
export default PopupInput