import React from "react";
import { ButtonsContainer, CrudButton } from "../../Buttons/ButtonsContainer";
export default function Name({
  buttonStyle,
  containerStyle,
  visible,
  name,
  color
}) {
  const keyPressEnter = (event, input) => {
    if (event.key === "Enter") {
      if (input.value !== "") {
        input.blur();
      }
      console.log("enter press here! ");
    }
  };
  let input;
  return (
    <div className={containerStyle}>
      <input
        placeholder="Введите наименование"
        ref={node => {
          input = node;
        }}
        onChange={() => name.update(input.value)}
        onKeyPress={e => keyPressEnter(e, input)}
        defaultValue={name.value}
      />
      <ButtonsContainer
        containerStyle={containerStyle}
        buttonStyle={buttonStyle}
        Visible={{
          onClick: visible.onClick,
          state: visible.value === true ? "on" : "active"
        }}
        Color={{
          onClick: color.onClick
        }}
      />
    </div>
  );
}
