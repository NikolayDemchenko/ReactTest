import React from "react";
import SaveButton from "Components/Buttons/SaveButton/SaveButton";
import DeleteButton from "Components/Buttons/DeleteButton/DeleteButton";
import controlStyle from '../../Styles/ControlStyle.module.css'
export default ({style,save, remove, name }) => {
  let input;
  return (
    <div
      className={style}
    >
      <input
        placeholder="Введите наименование"
        ref={node => {
          input = node;
        }}
        className={controlStyle.Input}
        defaultValue={name}
      />
      <SaveButton
        style={controlStyle.Crud}
        onClick={e => {
          //Проверка
          console.log("Сохранено: ", input.value);
          e.preventDefault();
          save(input.value);
        }}
      />
      <DeleteButton
        style={controlStyle.Crud}
        onClick={e => {
          e.preventDefault();
          remove();
          console.log("Удалено: ", input.value);
        }}
      />
    </div>
  );
};
