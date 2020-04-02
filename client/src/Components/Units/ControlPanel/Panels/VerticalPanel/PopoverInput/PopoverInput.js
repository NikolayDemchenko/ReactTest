import React from "react";
import Popover from "../../../ModalWindows/PopoverPopupState";
import Input from './Input'
import InputSwitch from './InputSwitch'
export default function PopoverInput(props) {

  // let input;
  return (
    <div style={{ display: "inline-flex" }}>
      <Popover>
        <div style={{ padding: "0px 5px", cursor: "pointer", minWidth:"10px" }}>: {props.value}</div>
        <InputSwitch {...props}/>
      </Popover>
    </div>
  );
}
