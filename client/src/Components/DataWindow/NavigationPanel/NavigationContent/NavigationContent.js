import React from "react";
import { useQuery, useMutation, useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";

export default function NvigationContent({ folder }) {
  // Получение родителя открытой Folder
  const query = gql`
    query GetParentFolderById($id: ID!) {
      folder(id: $id) {
        name
        parentId
      }
    }
  `;
  const { cache } = useApolloClient();

  const getFolderParents = (parents, folder) => {
    if (folder.parentId == null) {
      return parents;
    } else {
      const data = cache.readQuery({
        query,
        variables: { id: folder.parentId }
      });
      parents.push(data.folder);
      return getFolderParents(parents, data.folder);
    }
  };
  const parents = getFolderParents([], folder).map(folder => folder.name);
  
  console.log("Открыта папка:", folder.name);
  console.log("Родители:", parents);

  return <div>{folder.name + " " + parents}</div>;
}
