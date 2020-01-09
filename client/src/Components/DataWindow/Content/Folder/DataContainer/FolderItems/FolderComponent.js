import React from "react";
import style from "../../../Folder/Folder.module.css";
import SaveButton from "Components/Buttons/SaveButton/SaveButton";
import DeleteButton from "Components/Buttons/DeleteButton/DeleteButton";
import ClickedContainer from "Components/ClickedContainer";
import buttonStyle from "Components/Buttons/Buttons.module.css";

export default ({
  updateOrCreateFolder,
  removeFolder,
  FolderClick,
  folder: { id, name, parentId }
}) => {
  let input;
  console.log("Имя объекта: ", name);
  return (
    <div className={style.Item}>
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
          console.log("Нажата кнопка сохранить: ", input.value);
          e.preventDefault();
          updateOrCreateFolder({
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
          removeFolder(id);
          console.log("Удалено: ", input.value);
        }}
      />
      {id !== null ? (
        <ClickedContainer
          ClickHandler={FolderClick}
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