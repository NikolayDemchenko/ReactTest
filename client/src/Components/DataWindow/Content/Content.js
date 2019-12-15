import React from "react";
import { useQuery, useMutation, useApolloClient } from "@apollo/react-hooks";
import Folders from "./Folder/Folders";
import ParentFolders from "./Folder/ParentFolders";
import {GET_FOLDER_ID} from "./Folder/FolderQueries";
export default function Content() {
  
  const { data } = useQuery(GET_FOLDER_ID);
  const getContent = () => {
    if (data.FolderId == null) {
      return ParentFolders;
    }else{
      return Folders
    }
  };
const DataContent=getContent();
  console.log("Content rendering");
  return (
    <div>     
      <DataContent />
    </div>
  );
}
