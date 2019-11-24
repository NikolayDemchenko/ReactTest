import React from "react";
import Icon from "react-icons-kit";
import style from "./Navigation.module.css";
import { undo2 } from "react-icons-kit/icomoon/undo2";

const Navigation = props => {
  // Генерация кнопки назад

  const ArrowShow = () => (
    <div className={style.ArrowLeft}>
      <Icon size={"3em"} icon={undo2} />
    </div>
  );
  let Arrow = () => <div />;
  if (props.slides > 0) {
    Arrow = ArrowShow;
  }

  return (
    <div className={style.Container}>
      <Arrow/>
      <div className={style.NavName}>Навигация</div>
    </div>
  );
};

export default Navigation;
