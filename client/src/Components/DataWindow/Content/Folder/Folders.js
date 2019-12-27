import React from "react";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import FolderItems from "./FolderItems";
import {
  REFETCH_FOLDER,
  GET_FOLDER_BY_ID,
  UPDATE_FOLDER,
  ADD_FOLDER,
  DELETE_FOLDER,
  NEW_FOLDER
} from "./folderQueries";

export default function Folders({ folder }) {
  const id = folder.id;
  const [newFolder] = useMutation(NEW_FOLDER, {
    variables: { folder }
  });
  const client = useApolloClient();
  const [createFolder] = useMutation(ADD_FOLDER, {
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
  const [refetchFolder] = useMutation(REFETCH_FOLDER, {
    refetchQueries: [
      {
        query: GET_FOLDER_BY_ID,
        variables: { id }
      }
    ]
  });
  console.log("Рендеринг Folders");
  const folderFunctions = {
    createFolder,
    updateFolder,
    deleteFolder,
    newFolder,
    refetchFolder
  };
  return (
    <FolderItems
      client={client}
      folders={folder.folders}
      templates={folder.templates}
      folderFunctions={folderFunctions} 
    />
  );
}
