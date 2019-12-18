import React from "react";
import NvigationContent from "./Parents/Parents";
import UndoArrow from "./UndoArrow/UndoArrow";
import style from "./Navigation.module.css";

const NavigationPanel = ({ folder }) => {

  console.log("Рендеринг панели навигации:", folder.id);
  return (
    <div className={style.NavigationPanel}>
      <UndoArrow folder={folder} />    
      <NvigationContent folder={folder} />
      <div className={style.OpenedItem}>{folder.name}</div>      
    </div>
  );
};
export default NavigationPanel;
