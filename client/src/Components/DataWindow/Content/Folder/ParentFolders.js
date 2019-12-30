import React from "react";
import { useQuery, useMutation} from "@apollo/react-hooks";
import FolderItems from "./FolderItems";
import {
  REFETCH_FOLDER,
  GET_PARENT_FOLDERS,
  UPDATE_FOLDER,
  ADD_FOLDER,
  DELETE_FOLDER,
  NEW_PARENT_FOLDER
} from "./folderQueries";

export default ({ parentId,style })=> { 
  const { loading, error, data, client } = useQuery(GET_PARENT_FOLDERS, {
    variables: { parentId }
  });
  const [newParentFolder] = useMutation(NEW_PARENT_FOLDER, {
    variables: { name: "", parentId }
  });
  const [createFolder] = useMutation(ADD_FOLDER, {
    refetchQueries: [
      {
        query: GET_PARENT_FOLDERS,
        variables: { parentId }
      }
    ]
  });
  const [updateFolder] = useMutation(UPDATE_FOLDER);
  const [deleteFolder] = useMutation(DELETE_FOLDER, {
    refetchQueries: [
      {
        query: GET_PARENT_FOLDERS,
        variables: { parentId }
      }
    ]
  });
  const [refetchFolder] = useMutation(REFETCH_FOLDER, {
    refetchQueries: [
      {
        query: GET_PARENT_FOLDERS,
        variables: { parentId }
      }
    ]
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const folderFunctions = {
    createFolder,
    updateFolder,
    deleteFolder,
    newFolder:newParentFolder,
    refetchFolder
  };
  console.log("Рендеринг ParentFolders");
  return (
    <FolderItems
    styles={style}
    client={client}
      folders={data.parentFolders}
      folderFunctions={folderFunctions}
    />
  );
}
