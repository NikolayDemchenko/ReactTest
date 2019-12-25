import React from "react";
import style from "../Content.module.css";
import updateOrCreateFolder from "Function/updateOrCreateFolder";
import setFolderId from "Function/setFolderId";
import SaveButton from "Components/Buttons/SaveButton/SaveButton";
import DeleteButton from "Components/Buttons/DeleteButton/DeleteButton";
import PlusButton from "Components/Buttons/PlusButton/PlusButton";
import styleButton from "Components/Buttons/Buttons.module.css";

export default ({
  client,
  folders,
  create,
  update,
  remove,
  newFolder,
  removeNewFolder
}) => {
  const AddButton = () => {
    const itemId = folders.length !== 0 ? folders[folders.length - 1].id : 1;
    if (itemId !== null) {
      return (
        <PlusButton
          style={style.AddItem}
          onClick={e => {
            e.preventDefault();
            newFolder();
          }}
        />
      );
    } else {
      return <div />;
    }
  };
  const items = folders.map(({ id, name, parentId }) => {
    const removeFolder = id => {
      if (id == null) {
        removeNewFolder({ variables: { id } });
      } else {
        remove({ variables: { id } });
      }
    };
    let input;    
    console.log("Имя: ", name);
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
          value={name}
          style={styleButton.Crud}
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
          style={styleButton.Crud}
          onClick={e => {
            //Проверка
            e.preventDefault();
            removeFolder(id);
            console.log("Удалено: ", input.value);
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
      <AddButton />
    </div>
  );
};
