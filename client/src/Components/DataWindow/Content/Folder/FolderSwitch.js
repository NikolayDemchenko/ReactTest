import React from 'react'
import Folder from "./DataContainer/Folder";
import ParentFolders from "./DataContainer/ParentFolders";
export default (id) => {
  if (id == null) {
    console.log("Загрузка родительских папок:", id);
    return <ParentFolders parentId={id} />;
  } else{
    console.log("Загрузка содержимого папки :", id);
    return <Folder id={id} />; 
  }
};