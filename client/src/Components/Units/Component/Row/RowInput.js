import React, { useState } from "react";
import { ButtonsContainer } from "../../../Buttons/ButtonsContainer";
export default function RowInput({
  buttonColor,
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

  const [state, setstate] = useState(false);

  let Switch = () => <div />;
  if (state) {
    Switch = props => <ButtonsContainer {...props} />;
  }
 
  let input;
  return (
    <div
      onClick={() => {
        console.log("Клик бля!");
        setstate(true);
      }}
    >
      <input
        placeholder="Введите значение"
        ref={node => {
          input = node;     
        }}
        onBlur={e => {
          e.preventDefault();
          changeValue(input.value);
        }}
        onKeyPress={e => keyPressEnter(e, input)}
        defaultValue={value}
      />
      <Switch
        color={buttonColor}
        Visible={{
          onClick: visible.onClick,
          color: visible.value === true ? buttonColor.on : buttonColor.off
        }}
        Color={{
          onClick: color.onClick,
          color: buttonColor.active
        }}
      />      
    </div>
  );
}
