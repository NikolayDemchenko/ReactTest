import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import NavigationPanel from "../../NavigationPanel/NavigationPanel";
import FolderContainer from "./FolderItems/FolderContainer";

import {
  REFETCH_FOLDER,
  GET_FOLDER_BY_ID as query,
  UPDATE_FOLDER,
  ADD_FOLDER,
  DELETE_FOLDER,
  NEW_FOLDER,
  NEW_TEMPLATE
} from "../FolderQueries";

export default ({ id }) => {
  const { loading, error, data, client } = useQuery(query, {
    variables: { id }
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  // console.log("data:", data);
  // console.log("Тип id: ",typeof id);
  return (
    <div>
      <NavigationPanel folder={data.folder} />
      <Folders  folder={data.folder} client={client} />
    </div>
  );
};

const Folders = ({ folder, client }) => {
  const [newTemplate] = useMutation(NEW_TEMPLATE, {
    variables: { folder }
  });
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
  // console.log("Рендеринг Folders");

  return (
    <FolderContainer     
      client={client}
      folders={folder.folders}
      templates={folder.templates}
      tempVisible={true}
      folderFunctions={{
        createFolder,
        updateFolder,
        deleteFolder,
        newFolder,
        newTemplate,
        refetchFolder
      }}
    />
  );
};
