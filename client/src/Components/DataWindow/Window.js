import React from "react";
import Slider from "./WindowSlider";
import style from "./Window.module.css";
import { useQuery } from "@apollo/react-hooks";
import Folder from "./Content/Folder/Folder";
import ParentFolders from "./Content/Folder/ParentFolders";
import { GET_ITEM } from "./Content/Folder/folderQueries";

export default () => {
  console.log("Рендеринг Window");
  // Генерация контента
  const {ItemType,ItemId} = useQuery(GET_ITEM).data;
  const DataContent = () => {
    if (ItemType=="Folder"&& ItemId == null) {
      console.log("Загрузка родительских папок:", ItemId);
      return <ParentFolders parentId={ItemId} />;
    } else if (ItemType=="Folder"){
      console.log("Загрузка содержимого папки :", ItemId);
      return <Folder id={ItemId} />;
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
      {/* <ParentFolders  style={style.Slider} parentId={null} /> */}
      <Slides/>
      </div>      
      <DataContent />
    </div>
  );
};