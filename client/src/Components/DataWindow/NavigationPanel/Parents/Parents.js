import React from "react";
import { useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";
import style from "../../NavigationPanel/Navigation.module.css";
export default function NvigationContent({ folder }) {
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
  const client  = useApolloClient();
  const handleClick = itemId => {
    client.writeData({
      data: {
        FolderId: itemId
      }
    });
    console.log(" --- Получен новый айдишник:", itemId);
  };
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
  const parents = getFolderParents([], folder);

  // console.log("Открыта папка:", folder.name);
  // console.log("Родители:", parents);

  const items = getFolderParents([], folder).map(({ id, name }) => {
    return (
      <div onClick={() => handleClick(id)} className={style.Item} key={id}>
        {name}
      </div>
    );
  });
  return <div className={style.ContentContainer}>{items}</div>;
}
