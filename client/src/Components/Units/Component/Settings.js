import React from "react";
import Switch from "./Select";
import { ButtonsContainer } from "../../Buttons/ButtonsContainer";
export default function Settings({
  containerStyle,
  buttonColor,
  type,
  color,
  visible,
  remove,
  types
}) {
  const Select = props =>
    type.value === "unit" ? null : <Switch {...props} />;
  // console.log('type', type)
  return (
    <div className={containerStyle}>
      <Select types={types} type={type} />
      <ButtonsContainer
        containerStyle={containerStyle}        
        Color={{
          onClick: color.onClick,
          color: buttonColor.active
        }}
        Visible={{
          onClick: visible.onClick,
          color: visible.value === true ? buttonColor.on : buttonColor.active
        }}
        Delete={{
          onClick: remove,
          color: buttonColor.active
        }}
      />
    </div>
  );
}
