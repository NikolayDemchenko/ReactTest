import React from "react";
import Icon from "react-icons-kit";
import Style from "./Button.module.css";

export default ({onMouseDown, onClick, icon, color }) => {
  const [red, green, blue] = color || [240, 240, 240, 100];
  const styles = {
    "--btn-color": `rgba(${red}, ${green},${blue}, 0.75)`,
    "--btn-hover": `rgba(${red}, ${green},${blue}, 1)`,
    "--btn-active": `rgba(${red}, ${green},${blue}, 0.25)`
  };
  return (
    <div
      onMouseDown={onMouseDown}
      onClick={onClick}
      className={Style.button}
      style={styles}
    >
      <Icon size={"100%"} icon={icon} />
    </div>
  );
};
