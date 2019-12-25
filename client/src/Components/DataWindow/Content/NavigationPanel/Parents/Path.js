import React from "react";
import { useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";
import style from "../../NavigationPanel/Navigation.module.css";
import setFolderId from "Function/setFolderId";
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
        onClick={() => setFolderId(client, id)}
        className={style.Item}
        key={id}
      >
        {name}
      </div>
    );
  });
  return (
    <div className={style.PathContainer}>
      {items}
      <div className={style.OpenedItem}>{folder.name}</div>
    </div>
  );
}
