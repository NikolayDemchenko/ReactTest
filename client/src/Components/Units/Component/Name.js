import React from "react";
import { ButtonsContainer } from "../../Buttons/ButtonsContainer";
export default function Name({
  buttonStyle,
  containerStyle,
  visible,
  name,
  color,
  changeValue,
  dataUnit
}) {
  const keyPressEnter = (event, input) => {
    if (event.key === "Enter") {
      if (input.value !== "") {
        input.blur();
        changeValue(input.value);
      }
      console.log("enter press here! ");
    }
  };

  let input;
  return (
    <div className={containerStyle}>
      <input
        placeholder="Введите значение"
        ref={node => {
          input = node;
        }}
        onBlur={e => {
          e.preventDefault();
          changeValue(input.value);
        }}
        onChange={() => {
          name.update(input.value);
        }}
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
