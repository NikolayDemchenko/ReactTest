import React from "react";
import Select from "./Select";
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
  return (
    <div className={containerStyle}>
      <Select types={types} type={type.value} onClick={type.onClick} />
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
