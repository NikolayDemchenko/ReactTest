import React from "react";
import Popover from "../ModalWindows/Popover";
import Icon from "react-icons-kit";
import { plus } from "react-icons-kit/icomoon/plus";
import CreatePanel from './CreatePanel'
export default function Create(props) {
  // console.log("Create :>> ");
  return (
    <div
      title={"Добавить элемент"}
      style={{
        marginLeft: "auto",
        cursor: "pointer",
        width: "16px",
        color: "rgba(140, 200, 255, 0.8)"
        // border: "1px solid #fff",
      }}
    >
      <Popover
        PaperProps={{
          style: {
            background: "rgba(43,50,66,.95)",
            // border: "1px solid #abc",
            // width,
            overflow: "visible",
          },
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Icon size={"100%"} icon={plus} />  
        <CreatePanel {...props} />
      </Popover>
    </div>
  );
}