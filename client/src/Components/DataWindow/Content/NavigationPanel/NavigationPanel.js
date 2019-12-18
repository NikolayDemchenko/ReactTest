import React from "react";
import ParentsContainer from "./Parents/Parents";
import HomeButton from "./HomeButton/HomeButton";
import style from "./Navigation.module.css";

const NavigationPanel = ({ folder }) => {

  console.log("Рендеринг панели навигации:", folder.id);
  return (
    <div className={style.NavigationPanel}>
      <HomeButton folder={folder} />    
      <ParentsContainer folder={folder} />
      <div className={style.OpenedItem}>{folder.name}</div>      
    </div>
  );
};
export default NavigationPanel;
