import React from "react";
import style from "./Content.module.css";
import { useQuery } from "@apollo/react-hooks";
import Folders from "./Folder/Folders";
import { GET_FOLDER_BY_ID } from "./Folder/FolderQueries";
import NavigationPanel from "../NavigationPanel/NavigationPanel";

export default function Content({ id }) {
  const { loading, error, data } = useQuery(GET_FOLDER_BY_ID, {
    variables: { id }
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log("Загрузка папок");
  return (
    <div className={style.Content}>
      <NavigationPanel folder={data.folder} />
      <Folders folder={data.folder} />
    </div>
  );
}
