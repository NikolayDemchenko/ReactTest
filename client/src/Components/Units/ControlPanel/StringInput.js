import React from "react";
export default function StringInput({ value, setValue }) {
  // value = typeof value !== "string" ? null : value;

  const keyPressEnter = (event, input) => {
    if (event.key === "Enter") {
      if (input.value !== "") {
        input.blur();
        setValue(input.value);
      }
      console.log("enter press here! ",input.value);
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
          setValue(e.target.value);
        }}
        onChange={e => {
          e.preventDefault();
          setValue(e.target.value);
        }}
        onKeyPress={e => keyPressEnter(e, input)}
        value={value}
      />
    </div>
  );
}
