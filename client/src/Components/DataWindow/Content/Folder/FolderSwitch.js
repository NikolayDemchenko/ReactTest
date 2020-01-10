import React from 'react'
import Folder from "./DataContainer/Folder";
import ParentFolders from "./DataContainer/ParentFolders";
import style from '../Folder/Folder.module.css'
export default (id) => {
  if (id == null) {
    console.log("Загрузка родительских папок:", id);
    return <ParentFolders style={style} parentId={id} />;
  } else{
    console.log("Загрузка содержимого папки :", id);
    return <Folder style={style} id={id} />; 
  }
};