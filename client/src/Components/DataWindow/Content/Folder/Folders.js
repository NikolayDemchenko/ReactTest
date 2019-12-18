import React from "react";
import style from "../Content.module.css";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import setFolderId from "Function/setFolderId";
import updateOrCreateFolder from "Function/updateOrCreateFolder";
import {
  ADD_FOLDER,
  UPDATE_FOLDER,
  DELETE_FOLDER,
  NEW_FOLDER,
  GET_FOLDER_BY_ID
} from "./folderQueries";

export default function Folders({ folder }) {
  const client = useApolloClient();
  console.log("Рендеринг Folders");
  const id = folder.id;
  // console.log("Проверяемое:", parentId);

  // Создание формы для добавления объекта Folder
  const [newFolder] = useMutation(NEW_FOLDER, {
    variables: { folder, name: ""}
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
            updateOrCreateFolder(addFolder,updateFolder,{
               id, name: input.value, parentId: folder.id 
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
        <div onClick={() => setFolderId(client,id)} className={style.InnerItem}></div>
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
