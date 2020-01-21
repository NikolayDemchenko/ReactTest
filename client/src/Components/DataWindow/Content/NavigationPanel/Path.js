import React from "react";
import { useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";
import setItem from "Function/setItem";
import Home from "Components/Buttons/Home/Home";

export default ({style, folder }) => {
  // Получение родителя открытой Folder
  const query = gql`
    query GetFolderById($id: ID!) {
      folder(id: $id) @client {
        id
        name
        parentId
      }
    }
  `;
  const client = useApolloClient();
  const getFolderParents = ({parentId}, parents = []) => {
    if (parentId == null) {
      return parents;
    } else {
      const {folder} = client.readQuery({
        query,
        variables: { id: parentId }
      });
      parents.unshift(folder);
      return getFolderParents(folder, parents);
    }
  };
  // console.log("Открыта папка:", folder.name);
  // console.log("Родители:", parents);

  const items = getFolderParents(folder).map(({ id, name }) => {
    return (
      <div onClick={() => setItem(client, id)} className={style.Item} key={id}>
        {name}
      </div>
    );
  });
  return (
    <div className={style.PathContainer}>
      <Home onClick={() => setItem(client, null)} />
      {items}
      <div className={style.OpenedItem}>{folder.name}</div>
    </div>
  );
};
