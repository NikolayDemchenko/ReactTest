import React from "react";
import { useQuery, useMutation, useApolloClient} from "@apollo/react-hooks";
import FolderItems from "./FolderItems";
import {
  REFETCH_FOLDER,
  GET_PARENT_FOLDERS,
  UPDATE_FOLDER,
  ADD_FOLDER,
  DELETE_FOLDER,
  NEW_PARENT_FOLDER
} from "./folderQueries";

export default function ParentFolders({ parentId }) {
  const client = useApolloClient();
  const { loading, error, data } = useQuery(GET_PARENT_FOLDERS, {
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

  console.log("Рендеринг ParentFolders");
  return (
    <FolderItems
    client={client}
      folders={data.parentFolders}
      create={createFolder}
      update={updateFolder}
      remove={deleteFolder}
      newFolder={newParentFolder}
      refetchFolder={refetchFolder}
    />
  );
}
