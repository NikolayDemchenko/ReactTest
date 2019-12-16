import React from "react";
import style from "./NavigationPanel.module.css";
import { useQuery } from "@apollo/react-hooks";
import { GET_FOLDER_ID } from "../Content/Folder/FolderQueries";
import NvigationContent from "./NavigationContent/NavigationContent"
import UndoArrow from "../Buttons/Arrows/UndoArrow"
const NavigationPanel =() => {
 
  //Получение FolderID
  const {data} = useQuery(GET_FOLDER_ID);

 // Генерация кнопки назад
  const GetPanel = () => {
    if (data.FolderId == null) {
      return <div />;
    } else {
      console.log("Генерация кнопки назад для папки:", data.FolderId);
      return(
      <div className={style.Navigation}>
        <UndoArrow  folderId={data.FolderId} />
        <div className={style.NavName}><NvigationContent/></div>
      </div>)
       ;
    }
  };
  return (
    <GetPanel/>
  );
};
export default NavigationPanel;
