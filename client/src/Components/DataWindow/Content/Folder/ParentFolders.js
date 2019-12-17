import React from "react";
import style from "../Content.module.css";
import { useQuery, useMutation, useApolloClient } from "@apollo/react-hooks";
import {
  GET_FOLDER_CHILDS,
  ADD_FOLDER,
  UPDATE_FOLDER,
  DELETE_FOLDER,
  NEW_PARENT_FOLDER
} from "./FolderQueries";

export default function ParentFolders({ parentId }) {
  const client = useApolloClient();
  const handleClick = itemId => {
    console.log(" --- Получен новый айдишник:", itemId);
    client.writeData({
      data: {
        FolderId: itemId
      }
    });
  };
  const { loading, error, data } = useQuery(GET_FOLDER_CHILDS, {
    variables: { parentId }
  });
  // console.log("parentId:", parentId);

  // Создание формы для добавления объекта Folder
  const [newParentFolder] = useMutation(NEW_PARENT_FOLDER, {
    variables: { name: "", parentId }
  });

  const [addFolder] = useMutation(ADD_FOLDER, {
    refetchQueries: [
      {
        query: GET_FOLDER_CHILDS,
        variables: { parentId }
      }
    ]
  });
  const [updateFolder] = useMutation(UPDATE_FOLDER);
  const [deleteFolder] = useMutation(DELETE_FOLDER, {
    refetchQueries: [
      {
        query: GET_FOLDER_CHILDS,
        variables: { parentId }
      }
    ]
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const updateOrCreateFolder = item => {
    // console.log(item.variables.id);
    if (item.variables.id === null) {
      const newItem = (() => {
        const { name, parentId } = item.variables;
        return { variables: { name, parentId } };
      })();
      addFolder(newItem);
      // console.log(newItem);
    } else {
      // console.log(item);
      updateFolder(item);
    }
  };

  const items = data.childFolders.map(({ id, name }) => {
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
            // console.log(input.value);
            e.preventDefault();
            updateOrCreateFolder({
              variables: { id, name: input.value, parentId: null }
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
  console.log("Рендеринг ParentFolders");
  return (
    <div className={style.Content}>
      {items}
      <button onClick={newParentFolder}>Добавить</button>
    </div>
  );
}
