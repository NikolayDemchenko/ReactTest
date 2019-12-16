import React from "react";
import { useQuery, useMutation, useApolloClient } from "@apollo/react-hooks";
import { GET_FOLDER_ID } from "../../Content/Folder/FolderQueries";
import gql from "graphql-tag";

export default  function  NvigationContent () {
  const getFolderId = useQuery(GET_FOLDER_ID);

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
    variables: { id: getFolderId.data.FolderId }
  });
  
  console.log("Открыта папка:",getFolderId.data.FolderId);
  return (
    <div>
     {/* {data.folder.name} */}
    </div>
  );
}
