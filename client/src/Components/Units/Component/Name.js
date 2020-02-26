import React from "react";
import { ButtonsContainer, CrudButton } from "../../Buttons/ButtonsContainer";
export default function Name({ style, visible, name, color }) {
  const keyPressEnter = (event, input ) => {
    if (event.key === "Enter") {
      if (input.value !== "") {
        input.blur();
      }
      console.log("enter press here! ");
    }
  };
  let input;
  return (
    <div>
      <input
        placeholder="Введите наименование"
        ref={node => {
          input = node;
        }}
        onChange={() => name.update(input.value)}
        onKeyPress={e => keyPressEnter(e, input)}
        // className={control.Input}
        defaultValue={name.value}
      />
      <ButtonsContainer
        containerStyle={style.Container}
        buttonStyle={style}
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
