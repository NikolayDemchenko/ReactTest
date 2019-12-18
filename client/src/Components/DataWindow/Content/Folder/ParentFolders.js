import React from "react";
import style from "../Content.module.css";
import { useQuery, useMutation, useApolloClient } from "@apollo/react-hooks";
import setFolderId from "Function/setFolderId";
import updateOrCreateFolder from "Function/updateOrCreateFolder";
import {
  GET_FOLDER_CHILDS,
  ADD_FOLDER,
  UPDATE_FOLDER,
  DELETE_FOLDER,
  NEW_PARENT_FOLDER
} from "./folderQueries";

export default function ParentFolders({ parentId }) {
  const client = useApolloClient();

  const { loading, error, data } = useQuery(GET_FOLDER_CHILDS, {
    variables: { parentId }
  });
  // console.log("parentId:", parentId);

  // Создание формы для добавления объекта Folder
  const [newParentFolder] = useMutation(NEW_PARENT_FOLDER, {
    variables: { name: "", parentId }
  });

  const [createFolder] = useMutation(ADD_FOLDER, {
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
            updateOrCreateFolder(createFolder,updateFolder,{ id, name: input.value, parentId: null }
            );
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
        <div onClick={() => setFolderId(client,id)} className={style.InnerItem}></div>
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
