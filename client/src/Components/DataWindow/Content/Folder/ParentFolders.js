import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import FolderItems from "./FolderItems";
import {
  REFETCH_FOLDER,
  GET_FOLDERS_BY_PARENTID as query,
  UPDATE_FOLDER,
  ADD_FOLDER,
  DELETE_FOLDER,
  NEW_PARENT_FOLDER
} from "./folderQueries";

export default ({ parentId, style }) => {
  const variables = { parentId };
  const { loading, error, data, client } = useQuery(query, {
    variables: { parentId }
  });
  const [newParentFolder] = useMutation(NEW_PARENT_FOLDER, {
    variables: { name: "", parentId }
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
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log("Рендеринг ParentFolders");
  return (
    <FolderItems
      styles={style}
      client={client}
      folders={data.parentFolders}
      folderFunctions={{
        createFolder,
        updateFolder,
        deleteFolder,
        newFolder: newParentFolder,
        refetchFolder
      }}
    />
  );
};
