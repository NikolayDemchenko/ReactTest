import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Folders from "./Folder/Folders";
import ParentFolders from "./Folder/ParentFolders";
import {GET_FOLDER_ID} from "./Folder/FolderQueries";
export default function Content({data}) {
  
  // const { data } = useQuery(GET_FOLDER_ID);
  // const DataContent = () => {
  //   if (data.FolderId == null) {
  //     return <ParentFolders/>;
  //   }else{
  //     return <Folders/>
  //   }
  // };

  console.log("Отображение папок в браузере");
  return (
    <div>     
      {data}
    </div>
  );  
}
