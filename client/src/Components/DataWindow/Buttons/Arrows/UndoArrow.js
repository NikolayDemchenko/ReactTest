import React from "react";
import Icon from "react-icons-kit";
import { undo2 } from "react-icons-kit/icomoon/undo2";
import style from "./Arrows.module.css";
import { useQuery, useMutation, useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";

const UndoArrow = ({folderId}) => {
    // Получение родителя открытой Folder
    const GET_FOLDER_PARENTID = gql`
      query GetFolderById($id: ID!) {
        folder(id: $id) {         
         parentId
        }
      }
    `;
     const {data,client} = useQuery(GET_FOLDER_PARENTID, { variables: { id: folderId } });
    const handleClick = () => {
      client.writeData({
        data: {
          FolderId: data.folder.parentId
        }
      });
      console.log("Клик!", data.folder.parentId);
    };
    return (
      <div 
      className={style.UndoArrow}
       onClick={() => handleClick()}>
        <Icon size={"3em"} icon={undo2} />
      </div>
    );
  };
  export default UndoArrow;