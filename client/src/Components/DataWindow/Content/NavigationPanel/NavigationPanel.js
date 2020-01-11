import React from "react";
import Path from "./Path";
import style from "../../../../Styles/NavigationPanel.module.css";

const NavigationPanel = ({ folder }) => {
  console.log("Рендеринг панели навигации:", folder.id);
  return (
    <div className={style.NavigationPanel}>
      <Path style={style} folder={folder} />
    </div>
  );
};
export default NavigationPanel;
