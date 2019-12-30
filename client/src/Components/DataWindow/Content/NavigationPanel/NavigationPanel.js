import React from "react";
import Path from "./Path";
import style from "./Navigation.module.css";

const NavigationPanel = ({ folder }) => {
  console.log("Рендеринг панели навигации:", folder.id);
  return (
    <div className={style.NavigationPanel}>
      <Path folder={folder} />
    </div>
  );
};
export default NavigationPanel;
