import React from "react";
import ClickedContainer from "../../../../../BaseComponents/ClickedContainer";
import NameComponent from "./NameComponent";
import {FolderName} from "../../../../../../Styles/Container.module.css";

export default (props) => {
  // console.log("id объекта: ", id);
  return (
    <div className={props.style.Item}>
      <NameComponent
        {...props}
        style={FolderName}       
      />
      {props.id !== null ? (
        <ClickedContainer
        onClick={props.onClick}
          style={{
            // border: "1px solid black",
            width: "100%",
            height: "200px"
          }}
        />
      ) : (null)}
    </div>
  );
};
