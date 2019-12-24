import React from "react";
import PathContainer from "./Parents/Path";
import HomeButton from "Components/Buttons/HomeButton/HomeButton";
import style from "./Navigation.module.css";
import { useApolloClient } from "@apollo/react-hooks";
import setFolderId from "Function/setFolderId";

const NavigationPanel = ({ folder }) => {
  const client = useApolloClient();
  console.log("Рендеринг панели навигации:", folder.id);
  return (
    <div className={style.NavigationPanel}>
      <HomeButton onClick={() => setFolderId(client, null)}/>    
      <PathContainer folder={folder} />
    </div>
  );
};
export default NavigationPanel;
