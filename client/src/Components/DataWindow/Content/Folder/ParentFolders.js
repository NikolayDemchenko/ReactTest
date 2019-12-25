import React from "react";
import { useQuery, useMutation, useApolloClient} from "@apollo/react-hooks";
import FolderItems from "./FolderItems";
import {
  REMOVE_NEW_FOLDER,
  GET_FOLDER_CHILDS,
  UPDATE_FOLDER,
  ADD_FOLDER,
  DELETE_FOLDER,
  NEW_PARENT_FOLDER
} from "./folderQueries";

export default function ParentFolders({ parentId }) {
  const client = useApolloClient();
  const { loading, error, data } = useQuery(GET_FOLDER_CHILDS, {
    variables: { parentId }
  });
  const [newParentFolder] = useMutation(NEW_PARENT_FOLDER, {
    variables: { name: "", parentId }
  });
  const [createFolder] = useMutation(ADD_FOLDER, {
    refetchQueries: [
      {
        query: GET_FOLDER_CHILDS,
        variables: { parentId }
      }
    ]
  });
  const [updateFolder] = useMutation(UPDATE_FOLDER);
  const [deleteFolder] = useMutation(DELETE_FOLDER, {
    refetchQueries: [
      {
        query: GET_FOLDER_CHILDS,
        variables: { parentId }
      }
    ]
  });
  const [removeNewFolder] = useMutation(REMOVE_NEW_FOLDER, {
    refetchQueries: [
      {
        query: GET_FOLDER_CHILDS,
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
      folders={data.childFolders}
      create={createFolder}
      update={updateFolder}
      remove={deleteFolder}
      newFolder={newParentFolder}
      removeNewFolder={removeNewFolder}
    />
  );
}
