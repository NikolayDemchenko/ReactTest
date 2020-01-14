import React from "react";
import Slider from "./WindowSlider";
import container from "../../Styles/Container.module.css";
import { useQuery } from "@apollo/react-hooks";
import FolderSwitch from "./Content/Folder/FolderSwitch";
import Template from "./Content/Template/DataTemplate";
import { GET_ITEM } from "./Content/Folder/FolderQueries";

export default () => {
  console.log("Рендеринг Window");
  // Генерация контента
  const { ItemType, ItemId} = useQuery(GET_ITEM).data;

  let DataContent;
  switch (ItemType) {
    case "Template":
      DataContent = () => Template(ItemId);
      break;
    case "Instance":
      break;
    default:
      DataContent = () => FolderSwitch(ItemId);
  }
  // Генерация слайдера
  const slideCount = 8;
  const SlideShow = () => (
    <div className={container.Slider}>
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
        <Slides />
      </div>
      <DataContent />
    </div>
  );
};
