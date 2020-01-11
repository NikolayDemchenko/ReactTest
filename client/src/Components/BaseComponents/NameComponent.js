import React from "react";
import SaveButton from "Components/Buttons/SaveButton/SaveButton";
import DeleteButton from "Components/Buttons/DeleteButton/DeleteButton";
export default ({containerStyle, btnStyle, inputStyle, save, remove, name }) => {
  let input;
  return (
    <div
      className={containerStyle}
    >
      <input
        placeholder="Введите наименование"
        ref={node => {
          input = node;
        }}
        className={inputStyle}
        defaultValue={name}
      />
      <SaveButton
        style={btnStyle}
        onClick={e => {
          //Проверка
          console.log("Сохранено: ", input.value);
          e.preventDefault();
          save(input.value);
        }}
      />
      <DeleteButton
        style={btnStyle}
        onClick={e => {
          e.preventDefault();
          remove();
          console.log("Удалено: ", input.value);
        }}
      />
    </div>
  );
};
