import React from "react";
import style from "./Folder.module.css";
import { useQuery } from "@apollo/react-hooks";
import Folders from "./Folders";
import { GET_FOLDER_BY_ID } from "./folderQueries";
import NavigationPanel from "../NavigationPanel/NavigationPanel";
// import ParentFolders from "./ParentFolders";

export default ({ id }) => {
  const { loading, error, data, client } = useQuery(GET_FOLDER_BY_ID, {
    variables: { id }
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log("Загрузка папок");
  return (
    <div>
      <NavigationPanel folder={data.folder} />
      <Folders folder={data.folder} client={client} />
    </div>
  );
};
