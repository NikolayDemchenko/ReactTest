import React from "react";
import style from "../Content.module.css";
import { useQuery, useMutation, useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";
import {
  GET_FOLDER_ID,
  ADD_FOLDER,
  UPDATE_FOLDER,
  DELETE_FOLDER,
  NEW_FOLDER,
  GET_FOLDER_BY_ID
} from "./FolderQueries";

export default function Content() { 

  const client = useApolloClient();
  const dataState = useQuery(GET_FOLDER_ID);
  let id = dataState.data.FolderId;
  console.log("Айдишник:",id);
  const handleClick = itemId => {
    client.writeData({
      data: {
        FolderId: itemId
      }
    });   
    console.log(itemId);
  };


  const { loading, error, data } = useQuery(GET_FOLDER_BY_ID, {
    variables: { id }
  });
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
  
  const contentFolders = data.folder.folders;
  const parentId = data.folder.id;

  // console.log(childFolders);

  const items = contentFolders.map(({ id, name }) => {
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
              variables: { id, name: input.value, parentId }
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

  console.log("Опа!!!");
  return (
    <div className={style.Content}>
      {items}
      <button onClick={newFolder}>Добавить</button>
    </div>
  );
}
