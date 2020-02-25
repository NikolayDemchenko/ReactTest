import React from "react";
import Select from "./Select";
import { ButtonsContainer, CrudButton } from "../../Buttons/ButtonsContainer";
export default function Settings({
  type,  
  color,
  visible,
  remove,
  check,
  style
}) {
  return (
    <div>
      <Select type={type.value} onClick={type.onClick} />
      <ButtonsContainer
        containerStyle={style.Container}
        buttonStyle={style}

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
      />
    </div>
  );
}
