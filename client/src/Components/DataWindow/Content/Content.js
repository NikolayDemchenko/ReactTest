import React, { useState } from "react";
import style from "./Content.module.css";
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_FOLDER_CHILDS, ADD_FOLDER, UPDATE_FOLDER, DELETE_FOLDER } from './Folder/folderQueries'


export default function Content() {
  let parentId = null;
  const { loading, error, data } = useQuery(GET_FOLDER_CHILDS, {
    variables: { parentId }
  });  
  const [updateFolder] = useMutation(UPDATE_FOLDER);
  const [deleteFolder] = useMutation(DELETE_FOLDER, {
    refetchQueries: [{
      query: GET_FOLDER_CHILDS,
      variables: ({ parentId})
    }]
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const handleClick = (item) => {
    parentId = item;
    // console.log(parentId);
  }
  const items = data.childFolders.map(folder => {
    let input;
    return (
      <div onClick={() => handleClick(folder)} className={style.Item} key={folder.id}>
        <input placeholder="Введите наименование" ref={node => {
          input = node;
        }} className={style.Input} defaultValue={folder.name} />
        <button onClick={e => {
          console.log(input.value);
          e.preventDefault();
          updateFolder({ variables: { id: folder.id, name: input.value, parentId: null } });
        }}>Применить</button>
        <button onClick={e => {
          console.log(input.value);
          e.preventDefault();
          deleteFolder({ variables: { id: folder.id } });
        }}>Удалить</button>
      </div>);
  })
  // console.log(data.childFolders);


  return (
    <div className={style.Content}>{items}
      <button>Добавить</button>
    </div>
  );
};
