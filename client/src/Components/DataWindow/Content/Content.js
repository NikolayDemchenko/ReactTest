import React from "react";
import style from "./Content.module.css";
import { useQuery } from "@apollo/react-hooks";
import Folders from "./Folder/Folders";
import { GET_FOLDER_BY_ID } from "./Folder/folderQueries";
import NavigationPanel from "./NavigationPanel/NavigationPanel";

export default function Content({ id }) {
  const { loading, error, data } = useQuery(GET_FOLDER_BY_ID, {
    variables: { id }
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log("Загрузка папок");
  return (
    <div>
      <NavigationPanel folder={data.folder} />
      <div className={style.ContentContainer}>
        <Folders folder={data.folder} />
      </div>
    </div>
  );
}
