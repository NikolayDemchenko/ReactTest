import React from "react";
import style from "./NavigationPanel.module.css";
import NvigationContent from "./NavigationContent/NavigationContent";
import UndoArrow from "../Buttons/Arrows/UndoArrow";
const NavigationPanel = ({ folder }) => {

  console.log("Рендеринг панели навигации:", folder.id);
  return (
    <div className={style.Navigation}>
      <UndoArrow folder={folder} />
      <div className={style.NavName}>
        <NvigationContent folder={folder} />
      </div>
    </div>
  );
};
export default NavigationPanel;
