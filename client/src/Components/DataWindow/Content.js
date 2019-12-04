import React from "react";
import style from "./Content.module.css";
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_FOLDER_CHILDS, ADD_FOLDER,UPDATE_FOLDER } from './folderQueries'


export default function Content() {
  let parentId = null;
  const [updateFolder] = useMutation(UPDATE_FOLDER);
  const { loading, error, data } = useQuery(GET_FOLDER_CHILDS, {
    variables: { parentId }
  });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const handleClick = (item) => {
    parentId = item;
    console.log(parentId);
  }

  let input;
  const items = data.childFolders.map(folder => (
    <div onClick={() => handleClick(folder)} className={style.Item} key={folder.id}>
      <input ref={node => {
        input = node;
      }} className={style.Input} defaultValue=
        {folder.name} />
        <button onClick={e => {
          e.preventDefault();
          updateFolder({ variables: {id:folder.id, name: input.value, parentId: null } });
          input.value = "";
        }}>Применить</button>      
    </div>
  ))
  console.log(data.childFolders);

  
  return (
    <div className={style.Content}>{items}
      <button>Добавить</button>
    </div>
  );
};
