import React from "react";
export default function StringInput({ value, getValue }) {
  value = typeof value !== "string" ? null : value;

  const keyPressEnter = (event, input) => {
    if (event.key === "Enter") {
      if (input.value !== "") {
        input.blur();
        getValue(input.value);
      }
      console.log("enter press here! ");
    }
  };

  let input;
  return (
    <div>
      <input
        placeholder="Введите значение"
        ref={node => {
          input = node;
        }}
        onBlur={e => {
          e.preventDefault();
          getValue(input.value);
        }}
        onKeyPress={e => keyPressEnter(e, input)}
        defaultValue={value}
      />
    </div>
  );
}
