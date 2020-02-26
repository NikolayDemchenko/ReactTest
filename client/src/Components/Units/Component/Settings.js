import React from "react";
import Select from "./Select";
import { ButtonsContainer, CrudButton } from "../../Buttons/ButtonsContainer";
export default function Settings({
  containerStyle,
  buttonStyle,
  type,  
  color,
  visible,
  remove,
  check,add}) {
  return (
    <div className={containerStyle}>
      <Select type={type.value} onClick={type.onClick} />
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
          onClick: remove.onClick
        }}
        Check={{
          onClick: check.onClick
        }}
        Plus={{
          onClick: add
        }}
      />
    </div>
  );
}
