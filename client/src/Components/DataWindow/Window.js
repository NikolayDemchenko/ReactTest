import React from "react";
import Slider from "./WindowSlider";
import NavigationPanel from "./NavigationPanel/NavigationPanel";
import Content from "./Content/Content";
import style from "./Window.module.css";
import { useQuery } from "@apollo/react-hooks";
import Folders from "./Content/Folder/Folders";
import ParentFolders from "./Content/Folder/ParentFolders";
import {GET_FOLDER_ID} from "./Content/Folder/FolderQueries";

const Window = props => {
// Генерация контента
  const { data } = useQuery(GET_FOLDER_ID);
  const DataContent = () => {
    if (data.FolderId == null) {
      return <ParentFolders/>;
    }else{
      return <Folders/>
    }
  };


  // Генерация слайдера
  const slideCount = 8;
  const SlideShow = () => (
    <div className={style.Slider}>
      <Slider count={slideCount} name="Баобоаб" />
    </div>
  );
  let Slides = () => <div />;
  if (slideCount > 0) {
    Slides = SlideShow;
  }
  return (
    <div>
      <div className={style.Header}>
        <Slides />
        <NavigationPanel />
      </div>
      <div className={style.Content}>
        <DataContent/>
      </div>
    </div>
  );
};

export default Window;
