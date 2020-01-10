import React from "react";
import SaveButton from "Components/Buttons/SaveButton/SaveButton";
import DeleteButton from "Components/Buttons/DeleteButton/DeleteButton";
import ClickedContainer from "Components/ClickedContainer";
import buttonStyle from "Components/Buttons/Buttons.module.css";

export default ({ style, save, remove, onClick, id, name, parentId }) => {
  let input;
  console.log("id объекта: ", id);
  return (
    <div className={style.Item}>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          border: "1px solid red"
        }}
      >
        <input
          placeholder="Введите наименование"
          ref={node => {
            input = node;
          }}
          className={style.Input}
          defaultValue={name}
        />
        <SaveButton
          style={buttonStyle.Crud}
          onClick={e => {
            //Проверка
            console.log("Сохранено: ", input.value);
            e.preventDefault();
            save({
              id,
              name: input.value,
              parentId
            });
          }}
        />
        <DeleteButton
          style={buttonStyle.Crud}
          onClick={e => {
            e.preventDefault();
            remove(id);
            console.log("Удалено: ", input.value);
          }}
        />
      </div>
      {id !== null ? (
        <ClickedContainer
          ClickHandler={onClick}
          style={{
            border: "1px solid black",
            width: "100%",
            height: "200px"
          }}
        />
      ) : (
        <div />
      )}
    </div>
  );
};
