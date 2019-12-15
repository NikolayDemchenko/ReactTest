import React from "react";
import style from "./NavigationPanel.module.css";
import { useQuery, useMutation, useApolloClient } from "@apollo/react-hooks";

import { GET_FOLDER_ID } from "../Content/Folder/FolderQueries";
import UndoArrow from "../Buttons/Arrows/UndoArrow"
const NavigationPanel = props => {
 
  //Получение FolderID
  const {data} = useQuery(GET_FOLDER_ID);
  console.log("Данные:", data.FolderId);

 // Генерация кнопки назад
  const GetArrow = () => {
    if (data.FolderId == null) {
      return <div />;
    } else {
      return <UndoArrow  folderId={data.FolderId} />;
    }
  };
  return (
    <div className={style.Navigation}>
      <GetArrow />
      <div className={style.NavName}>Навигация</div>
    </div>
  );
};
export default NavigationPanel;
