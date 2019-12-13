import React from "react";
import style from "./Content.module.css";
import { useQuery, useMutation, useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";
import {
  GET_FOLDER_CHILDS,
  ADD_FOLDER,
  UPDATE_FOLDER,
  DELETE_FOLDER,
  NEW_FOLDER,
  GET_FOLDER_BY_ID
} from "./Folder/folderQueries";

export default function Content() {

  /////
  const useGetParentFolders = () => {
    const parentFolders = useQuery(GET_FOLDER_CHILDS, {
      variables: { parentId: null }
    });
    const gh = parentFolders.data;
    console.log(gh);
  }; 
  const GET_FOLDER_ID = gql`
    {
      FolderId @client
    }
  `;
  const dataState = useQuery(GET_FOLDER_ID);
  // let id = dataState.data.FolderId;
  // console.log(id);
/////

  
  let id = "5df2741180d5e02ee4e78759";
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
  const handleClick = itemId => {
    id = itemId;
    console.log(id);
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
