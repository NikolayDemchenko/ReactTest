import React from "react";
import { ButtonsContainer } from "../../Buttons/ButtonsContainer";
export default function Name({
  buttonStyle,
  containerStyle,
  visible,
  value,
  color,
  changeValue
}) {
  value = typeof value !== "string" ? null : value;
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
  // console.log('value', input)
  return (
    <div className={containerStyle}>
      <input
        placeholder="Введите значение"
        ref={node => {
          input = node;
          console.log("value", input);
        }}
        onBlur={e => {
          e.preventDefault();
          changeValue(input.value);
        }}
        onKeyPress={e => keyPressEnter(e, input)}
        defaultValue={value}
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
