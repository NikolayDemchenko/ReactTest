import gql from "graphql-tag";
import parentResolver from "./NewParentFolder";
import {merge} from "lodash"
const GET_FOLDERS = gql` 
    query GetFolderById($id: ID!) {
    folder(id: $id) {     
      id    
      folders {
        name
        id
        parentId
      } 
    }
  }
`;

const resolver = {
  Mutation: {
    newFolder: (_root, { name, id }, { cache }) => {
      let { folder } = cache.readQuery({ query: GET_FOLDERS,variables:{id} });

      const newFolder = {
        name,
        id: null,
        parentId:folder.id,
        __typename: "Folder"
      };
      folder.folders =  [...folder.folders, newFolder] ;
      const data ={folder};
      console.log(data);

      cache.writeQuery({query: GET_FOLDERS,variables:{id}, data });
      return newFolder;
    }
  }
};
export const resolvers=merge(resolver,parentResolver)