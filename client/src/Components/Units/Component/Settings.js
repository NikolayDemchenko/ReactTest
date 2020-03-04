import React from "react";
import Switch from "./Select";
import { ButtonsContainer } from "../../Buttons/ButtonsContainer";
export default function Settings({
  containerStyle,
  buttonStyle,
  type,
  color,
  visible,
  remove,
  types
}) {
  const Select=props=>type.value==="unit"?null:<Switch {...props}/>
  // console.log('type', type)
  return (
    <div className={containerStyle}>
      <Select types={types} type={type} />
      <ButtonsContainer
        containerStyle={containerStyle}
        buttonStyle={buttonStyle}
        Color={{
          onClick: color.onClick
        }}
        Visible={{
          onClick: visible.onClick,
          state: visible.value === true ? "on" : "active"
        }}
        Delete={{
          onClick: remove
        }} 
      />
    </div>
  );
}
