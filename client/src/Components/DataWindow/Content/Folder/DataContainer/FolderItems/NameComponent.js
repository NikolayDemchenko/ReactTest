import React from "react";
import {CrudButton,ButtonsContainer} from "../../../../../Buttons/ButtonsContainer";
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
       <ButtonsContainer
        containerStyle={CrudButton.Container}
        buttonStyle={CrudButton}        
        Save={{ onClick: e => {
          e.preventDefault();
          if (input.value !== "") {
            save(input.value);
            console.log("Сохранено: ", input.value);
          }
        }, state: "active" }}        
        Delete={{ onClick:e => {
          e.preventDefault();
          remove();
          console.log("Удалено: ", input.value);
        }, state: "active" }}
      />
    </div>
  );
};
