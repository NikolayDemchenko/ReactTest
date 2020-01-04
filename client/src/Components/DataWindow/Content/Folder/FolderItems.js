import React, { useEffect } from "react";
import styles from "./Folder.module.css";
import updateOrCreateFolder from "Function/updateOrCreateFolder";
import setItem from "Function/setItem";
import SaveButton from "Components/Buttons/SaveButton/SaveButton";
import DeleteButton from "Components/Buttons/DeleteButton/DeleteButton";
import AddButton from "Components/Buttons/PlusButton/AddButton";
import ClickedDiv from "Components/ClickedDiv";
import styleButton from "Components/Buttons/Buttons.module.css";

export default ({
  style = styles,
  client,
  folders,
  templates,
  folderFunctions:{
    createFolder,
    updateFolder,
    deleteFolder,
    newFolder,
    refetchFolder
  }
}) => {  

  useEffect(() => {
    return refetchFolder;
  }, [refetchFolder]);
  
  const folderItems = folders.map(({ id, name, parentId }) => {
    const removeFolder = id => {
      if (id == null) {
        refetchFolder();
      } else {
        deleteFolder({ variables: { id } });
      }
    };
    const FolderClick=(id,type)=>{
      setItem(client, id,type)
    }

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
        <ClickedDiv ClickHandler={FolderClick} arg={id} style={style.InnerItem}/>
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
      <AddButton items={folders} style={style.AddItem} onClick={e => {
            e.preventDefault();
            newFolder();
          }} />
    </div>
  );
};
