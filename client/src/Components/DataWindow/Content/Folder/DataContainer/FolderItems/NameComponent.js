import React from "react";
import Save from "../../../../../Buttons/Save/Save";
import Delete from "../../../../../Buttons/Delete/Delete";
import controlStyle from "../../../../../../Styles/ControlStyle.module.css";
export default ({ style, save, remove, name }) => {
  let input;
  return (
    <div className={style}>
      <input
        placeholder="Введите наименование"
        ref={node => {
          input = node;
        }}
        className={controlStyle.Input}
        defaultValue={name}
      />
      <Save
        style={controlStyle.Crud}
        onClick={e => {
          e.preventDefault();
          if (input.value !== "") {
            save(input.value);
            console.log("Сохранено: ", input.value);
          }
        }}
      />
      <Delete
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
