import React from "react";
import style from "../Content.module.css";
import updateOrCreateFolder from "Function/updateOrCreateFolder";
import { useApolloClient } from "@apollo/react-hooks";
import setFolderId from "Function/setFolderId";
import SaveButton from "Components/Buttons/SaveButton/SaveButton";
import DeleteButton from "Components/Buttons/DeleteButton/DeleteButton";
import PlusButton from "Components/Buttons/PlusButton/PlusButton";

export default ({ folders, create, update, remove, newFolder }) => {
  const items = folders.map(({ id, name, parentId }) => {
    const client = useApolloClient();
    let input;
    return (
      <div className={style.Item} key={id}>
        <input
          placeholder="Введите наименование"
          ref={node => {
            input = node;
          }}
          className={style.Input}
          defaultValue={name}
        />
        <SaveButton
          onClick={e => {
            //Проверка
            console.log("Сохранено: ", input.value);
            e.preventDefault();
            updateOrCreateFolder(create, update, {
              id,
              name: input.value,
              parentId
            });
          }}
        />
        <DeleteButton
          onClick={e => {
            //Проверка
            console.log("Удалено: ", input.value);
            e.preventDefault();
            remove({ variables: { id } });
          }}
        />
        <div
          onClick={() => setFolderId(client, id)}
          className={style.InnerItem}
        ></div>
      </div>
    );
  });
  return (
    <div className={style.ContentContainer}>
      {items}
      <PlusButton style={style.AddItem} onClick={newFolder} />
    </div>
  );
};
