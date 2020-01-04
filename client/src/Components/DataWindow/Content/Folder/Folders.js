import React from "react";
import { useMutation } from "@apollo/react-hooks";
import FolderItems from "./FolderItems";
import {
  REFETCH_FOLDER,
  GET_FOLDER_BY_ID as query,
  UPDATE_FOLDER,
  ADD_FOLDER,
  DELETE_FOLDER,
  NEW_FOLDER
} from "./folderQueries";

export default ({ folder, client }) => {
  const variables = { id: folder.id };
  const [newFolder] = useMutation(NEW_FOLDER, {
    variables: { folder }
  });
  const [createFolder] = useMutation(ADD_FOLDER, {
    refetchQueries: [{ query, variables }]
  });
  const [updateFolder] = useMutation(UPDATE_FOLDER);
  const [deleteFolder] = useMutation(DELETE_FOLDER, {
    refetchQueries: [{ query, variables }]
  });
  const [refetchFolder] = useMutation(REFETCH_FOLDER, {
    refetchQueries: [{ query, variables }]    
  });
  console.log("Рендеринг Folders");

  return (
    <FolderItems
      client={client}
      folders={folder.folders}
      templates={folder.templates}
      folderFunctions={{
        createFolder,
        updateFolder,
        deleteFolder,
        newFolder,
        refetchFolder
      }}
    />
  );
};
