import React from "react";
import { useQuery, useMutation, useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";

export default  function  NvigationContent ({folder}) {

  // Получение родителя открытой Folder
  const GET_FOLDER_PARENTID = gql`
    query GetFolderById($id: ID!) {
      folder(id: $id) {
        name
        parentId
      }
    }
  `;
  const {data} =  useQuery(GET_FOLDER_PARENTID, {
    variables: { id: folder.id }
  });
  
  console.log("Открыта папка:",data);
  return (
    <div>
     {data.folder.name}
    </div>
  );
}
