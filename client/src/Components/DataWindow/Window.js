import React from "react";
import Slider from "./WindowSlider";
import container from "../../Styles/Container.module.css";
import { useQuery } from "@apollo/react-hooks";
import FolderSwitch from "./Content/Folder/FolderSwitch";
import Template from "./Content/Template/DataTemplate";
import {GET_DATA} from './Queries'
export default () => {
  console.log("Рендеринг Window");
  // Генерация контента
  const { ItemType, ItemId} = useQuery(GET_DATA).data;

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
      {/* <img src="https://4.downloader.disk.yandex.ru/preview/b6504cff9c2dc4116fb23de6dbfd7c74d2c040962b7b5079c0dda201a3e6818e/inf/qWCWqzuUg4XGQiKby7MhDv-2IxbuGUe9Mp9DM_0JoIxnxvY-X9ZlqWGBwZqO5HydOturmQqfVsa193-slKtIrg==?uid=255982981&filename=2019-12-21+02-03-23.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&owner_uid=255982981&size=1280x891"/> */}
    </div>
  );
};
