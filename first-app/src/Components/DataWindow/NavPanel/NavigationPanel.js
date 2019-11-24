import React from "react";
import style from "./NavigationPanel.module.css";
import Navigation from "./Navigation";
const NavigationPanel = props => {
  return (
    <div className={style.NavigationPanel}>
      {props.data}
      <div className={style.Navigation}>
        <Navigation slides={props.slides} />
      </div>
      <div className={style.Search}>Поиск</div>
      <div className={style.Filter}>Фильтр</div>
    </div>
  );
};
export default NavigationPanel;
