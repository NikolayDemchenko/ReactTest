import React from "react";
import { ButtonsContainer } from "../../Buttons/ButtonsContainer";
export default function Name({
  buttonStyle,
  containerStyle,
  visible,
  name,
  color,
  changeName
}) {
  const keyPressEnter = (event, input) => {
    if (event.key === "Enter") {
      if (input.value !== "") {
        input.blur();
        changeName(input.value);
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
        onBlur={e => {
          e.preventDefault();
          changeName(input.value);
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
