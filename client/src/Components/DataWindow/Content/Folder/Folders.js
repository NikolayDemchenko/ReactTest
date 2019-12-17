import React from "react";
import style from "../Content.module.css";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import {
  ADD_FOLDER,
  UPDATE_FOLDER,
  DELETE_FOLDER,
  NEW_FOLDER,
  GET_FOLDER_BY_ID
} from "./FolderQueries";

export default function Folders({ folder }) {
  console.log("Рендеринг Folders");
  const id = folder.id;
  // console.log("Проверяемое:", parentId);

  // Создание формы для добавления объекта Folder
  const [newFolder] = useMutation(NEW_FOLDER, {
    variables: { id, name: "", parentId: id }
  });

  const [addFolder] = useMutation(ADD_FOLDER, {
    refetchQueries: [
      {
        query: GET_FOLDER_BY_ID,
        variables: { id }
      }
    ]
  });
  const [updateFolder] = useMutation(UPDATE_FOLDER);
  const [deleteFolder] = useMutation(DELETE_FOLDER, {
    refetchQueries: [
      {
        query: GET_FOLDER_BY_ID,
        variables: { id }
      }
    ]
  });
  const client = useApolloClient();
  const handleClick = itemId => {
    client.writeData({
      data: {
        FolderId: itemId
      }
    });
    console.log(" --- Получен новый айдишник:", itemId);
  };
  const updateOrCreateFolder = item => {
    // console.log(item.variables.id);
    if (item.variables.id === null) {
      const newItem = (() => {
        const { name, parentId } = item.variables;
        return { variables: { name, parentId } };
      })();
      addFolder(newItem);
      console.log("Добавляемые данные",newItem);
    } else {
      console.log("Обновляемые данные", item);
      updateFolder(item);
    }
  };

  const items = folder.folders.map(({ id, name }) => {
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
        <button
          onClick={e => {
            //Проверка
            console.log("Данные в инпуте:", input.value);
            e.preventDefault();
            updateOrCreateFolder({
              variables: { id, name: input.value, parentId: folder.id }
            });
          }}
        >
          Применить
        </button>
        <button
          onClick={e => {
            //Проверка
            console.log(input.value);
            e.preventDefault();
            deleteFolder({ variables: { id } });
          }}
        >
          Удалить
        </button>
        <div onClick={() => handleClick(id)} className={style.InnerItem}></div>
      </div>
    );
  });

  return (
    <div className={style.Content}>
      {items}
      <button onClick={newFolder}>Добавить</button>
    </div>
  );
}
