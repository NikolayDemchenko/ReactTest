import React from "react";
import Icon from "react-icons-kit";
import { undo2 } from "react-icons-kit/icomoon/undo2";
import style from "../Navigation.module.css";
import {useApolloClient} from "@apollo/react-hooks";

const UndoArrow = ({folder}) => {
    const client =useApolloClient();
     console.log("В стрелке открыта:", folder);
    const handleClick = () => {
      client.writeData({
        data: {
          FolderId: null
        }
      });
      console.log("Возврат к:", folder.parentId);
    };
    return (
      <div 
      className={style.UndoArrow}
       onClick={() => handleClick()}>
        <Icon size={"3em"} icon={undo2} />
      </div>
    );
  };
  export default UndoArrow;