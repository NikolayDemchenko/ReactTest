import React from "react";
import { useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";
import style from "./Navigation.module.css";
import setItemId from "Function/setItemId";
import HomeButton from "Components/Buttons/HomeButton/HomeButton";
export default function PathContent({ folder }) {
  // Получение родителя открытой Folder
  const query = gql`
    query GetParentFolderById($id: ID!) {
      folder(id: $id) {
        id
        name
        parentId
      }
    }
  `;
  const client = useApolloClient();
  const getFolderParents = (parents, folder) => {
    if (folder.parentId == null) {
      return parents;
    } else {
      const data = client.readQuery({
        query,
        variables: { id: folder.parentId }
      });
      parents.unshift(data.folder);
      return getFolderParents(parents, data.folder);
    }
  };
  // console.log("Открыта папка:", folder.name);
  // console.log("Родители:", parents);

  const items = getFolderParents([], folder).map(({ id, name }) => {
    return (
      <div
        onClick={() => setItemId(client, id)}
        className={style.Item}
        key={id}
      >
        {name}
      </div>
    );
  });
  return (
    <div className={style.PathContainer}>
      <HomeButton onClick={() => setItemId(client, null)}/> 
      {items}
      <div className={style.OpenedItem}>{folder.name}</div>
    </div>
  );
}
