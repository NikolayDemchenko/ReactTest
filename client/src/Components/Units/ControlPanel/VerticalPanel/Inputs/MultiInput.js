import React, { useState } from "react";
import Icon from "react-icons-kit";
import { cross } from "react-icons-kit/icomoon/cross";
import { StyleContext } from "../../ControlsContext";
import PopupInput from "../Inputs/PopupInput";

export default function MultiInput({
  property,
  setProperty: { setName, setValue },
  deleteProperty,
  setPreview,
  onDrop,
  tabIndex,
}) {

  return <PopupInput value={Object.keys(property)}/>  
}