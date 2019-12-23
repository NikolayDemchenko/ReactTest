import React from "react";
import Slider from "./WindowSlider";
import style from "./Window.module.css";
import { useQuery } from "@apollo/react-hooks";
import Content from "./Content/Content";
import ParentFolders from "./Content/Folder/ParentFolders";
import { GET_FOLDER_ID } from "./Content/Folder/folderQueries";
const Window = () => {
  console.log("Рендеринг Window");
  // Генерация контента
  const id = useQuery(GET_FOLDER_ID).data.FolderId;
  const DataContent = () => {
    if (id == null) {
      console.log("Загрузка родительских папок:", id);
      return <ParentFolders parentId={id} />;
    } else {
      console.log("Загрузка контента :", id);
      return <Content id={id} />;
      // return <ParentFolders parentId={id}/>;
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
      <div>
        <Slides />
      </div>      
      <DataContent />
    </div>
  );
};

export default Window;
