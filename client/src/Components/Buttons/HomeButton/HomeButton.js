import React from "react";
import { home } from "react-icons-kit/icomoon/home";
import Button from "../Button";
import style from "../../../Styles/ControlStyle.module.css";

export default ({ onClick }) => {
  return <Button style={style.Home} onClick={onClick} size={"3em"} icon={home} />;
};
