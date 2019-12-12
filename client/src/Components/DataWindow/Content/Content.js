import React from "react";
import style from "./Content.module.css";
import { useQuery, useMutation, useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";
import {
  GET_FOLDER_CHILDS,
  ADD_FOLDER,
  UPDATE_FOLDER,
  DELETE_FOLDER,
  NEW_FOLDER
} from "./Folder/folderQueries";

export default function Content() {

  let parentId = null;
  const { loading, error, data } = useQuery(GET_FOLDER_CHILDS, {
    variables: { parentId }
  });
  // Создание формы для добавления объекта Folder
  const [newFolder] = useMutation(NEW_FOLDER, {
    variables: { name: "", parentId}
  });

  const [addFolder] = useMutation(ADD_FOLDER, {
    refetchQueries: [
      {
        query: GET_FOLDER_CHILDS,
        variables: { parentId }
      }
    ]});
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
      addFolder(newItem)
      // console.log(newItem);
    } else {
      // console.log(item);
      updateFolder(item);
    }
  };
  const handleClick = item => {
    parentId = item;
    // console.log(parentId);
  };
  const items = data.childFolders.map(folder => {
    let input;
    return (
    
      <div
        onClick={() => handleClick(folder)}
        className={style.Item}
        key={folder.id}
      >
        <input
          placeholder="Введите наименование"
          ref={node => {
            input = node;
          }}
          className={style.Input}
          defaultValue={folder.name}
        />
        <button
          onClick={e => {
            //Проверка
            // console.log(input.value);
            e.preventDefault();
            updateOrCreateFolder({
              variables: { id: folder.id, name: input.value, parentId: null }
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
            deleteFolder({ variables: { id: folder.id } });
          }}
        >
          Удалить
        </button>
      </div>
    );
  });
  // console.log(data.childFolders);
console.log("Опа!!!")
  return (
    <div className={style.Content}>
      {items}
      <button onClick={newFolder}>Добавить</button>
    </div>
  );
}
