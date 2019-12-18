import React from "react";
import Icon from "react-icons-kit";
import { undo2 } from "react-icons-kit/icomoon/undo2";
import style from "../Navigation.module.css";
import setFolderId from "Function/setFolderId";
import { useApolloClient } from "@apollo/react-hooks";

export default () => {
  const client = useApolloClient();
  return (
    <div className={style.HomeButton} onClick={() => setFolderId(client, null)}>
      <Icon size={"3em"} icon={undo2} />
    </div>
  );
};
