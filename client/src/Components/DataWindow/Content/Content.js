import React from "react";
import { useQuery, useMutation, useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Folders from "./Folder/Folders";
import ParentFolders from "./Folder/ParentFolders";

export default function Content() {
  const GET_FOLDER_ID = gql`
    query GetFolderId {
      FolderId @client
    }
  `;
  const { data } = useQuery(GET_FOLDER_ID);
  let id = data.FolderId;
  const getContent = () => {
    if (data.FolderId == null) {
      return ParentFolders;
    }else{
      return Folders
    }
  };
const DataContent=getContent();
  console.log("Content rendering");
  return (
    <div>     
      <DataContent />
    </div>
  );
}
