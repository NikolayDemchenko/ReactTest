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

export default function Folders({data}) {
  console.log("Рендеринг Folders");
  const parentId = data.folder.id
  console.log("Проверяемое:",parentId);
  // Создание формы для добавления объекта Folder
  const [newFolder] = useMutation(NEW_FOLDER, {
    variables: { id:parentId, name: "", parentId: parentId }
  });

  const [addFolder] = useMutation(ADD_FOLDER, {
    refetchQueries: [
      {
        query: GET_FOLDER_BY_ID,
        variables: { parentId }
      }
    ]
  });
  const [updateFolder] = useMutation(UPDATE_FOLDER);
  const [deleteFolder] = useMutation(DELETE_FOLDER, {
    refetchQueries: [
      {
        query: GET_FOLDER_BY_ID,
        variables: { parentId }
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
    console.log(" --- Получен новый айдишник:",itemId);
  };
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
      console.log("Обновляемые данные",item);
      updateFolder(item);
    }
  };
  let input; 
  const items = data.folder.folders.map(({ id, name }) => (
      <div className={style.Item} key={id}>
        <input
          placeholder="Введите наименование"
          ref={node => {
            input = node;
            console.log("Данные в инпуте:",input);
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
              variables: { id, name: input.value, parentId: data.folder.id }
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
    ));


  return (
    <div>
       {items}
       <button onClick={newFolder}>Добавить</button>
    </div>
  )
 ;
}
