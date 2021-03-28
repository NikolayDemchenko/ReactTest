import React, { FC } from "react";
import Popover from "../Popover";
import Items from "./Items";
import {IFCSelectPanel} from '../../../../../Types/IProps'
 const SelectPanel:FC<IFCSelectPanel>=(props)=> {
  console.log("SelectPanel");
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
        {props.button ? props.button : props.selected}
      </div>
      <Items {...props} />
    </Popover>
  );
}
export default SelectPanel