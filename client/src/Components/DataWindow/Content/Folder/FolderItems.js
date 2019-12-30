import React, { useEffect } from "react";
import styles from "./Folder.module.css";
import updateOrCreateFolder from "Function/updateOrCreateFolder";
import setItemId from "Function/setItemId";
import SaveButton from "Components/Buttons/SaveButton/SaveButton";
import DeleteButton from "Components/Buttons/DeleteButton/DeleteButton";
import PlusButton from "Components/Buttons/PlusButton/PlusButton";
import styleButton from "Components/Buttons/Buttons.module.css";

export default ({
  style = styles,
  client,
  folders,
  templates,
  folderFunctions
}) => {
  const {
    createFolder,
    updateFolder,
    deleteFolder,
    newFolder,
    refetchFolder
  } = folderFunctions;

  useEffect(() => {
    return refetchFolder;
  }, [refetchFolder]);
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

  const folderItems = folders.map(({ id, name, parentId }) => {
    const removeFolder = id => {
      if (id == null) {
        refetchFolder();
      } else {
        deleteFolder({ variables: { id } });
      }
    };
    const ClickedDiv = () => {
      if (id !== null) {
        return (
          <div
            onClick={() => setItemId(client, id)}
            className={style.InnerItem}
          ></div>
        );
      } else {
        return <div />;
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
            console.log("Нажата кнопка сохранить: ", input.value);
            e.preventDefault();
            updateOrCreateFolder(createFolder, updateFolder, {
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
        <ClickedDiv />
      </div>
    );
  });
  const templateItems =
    templates !== undefined
      ? templates.map(({ id, name, folderId }) => {
          return (
            <div className={style.Item} key={id}>
              <input
                placeholder="Введите наименование"
                className={style.Input}
                defaultValue={name}
              />
            </div>
          );
        })
      : [];
  const items = [...folderItems, ...templateItems];
  // Сортировка
  // items.sort((prev, next) => {
  //   if ( prev.key < next.key ) return -1;
  //   if ( prev.key < next.key ) return 1;
  // })
  console.log("items:", items[0]);
  return (
    <div className={style.ContentContainer}>
      {items}
      <AddButton />
    </div>
  );
};
