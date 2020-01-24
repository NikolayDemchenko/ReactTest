import React from "react";
import Save from "../Buttons/Save/Save";
import Delete from "Components/Buttons/Delete/Delete";
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
      <Save       
        onClick={e => {
          //Проверка
          console.log("Сохранено: ", input.value);
          e.preventDefault();
          save(input.value);
        }}
      />
      <Delete     
        onClick={e => {
          e.preventDefault();
          remove();
          console.log("Удалено: ", input.value);
        }}
      />
    </div>
  );
};
