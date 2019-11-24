import React from "react";
import style from "./Content.module.css";
import { useQuery } from '@apollo/react-hooks';
import {GET_FOLDER_CHILDS} from './folderQueries'


export default function Content() {
  let parentId = null;
  const { loading, error, data } = useQuery(GET_FOLDER_CHILDS, {
    variables: {parentId}
  });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

const handleClick=(item)=>{
  parentId=item;
  console.log(parentId);
}
  const items = data.childFolders.map(folder => (
    <div onClick={() => handleClick(folder)} className={style.Item} key={folder.id}>{folder.name}</div>
  ))
  console.log(data.childFolders);

  return (
    <div className={style.Content}>{items}</div>
  );
};
