import React from "react";
import { home } from "react-icons-kit/icomoon/home";
import Button from "Components/Buttons/Button";


export default ({ onClick }) => {
  return <Button onClick={onClick} size={"3em"} icon={home} />;
};
