import gql from 'graphql-tag';

export const GET_ALL_FOLDERS = gql`
{
  allFolders{
    id
    name 
    parentId
    folders{
      name
    }
  }
}
`;
export const GET_FOLDER_BY_ID = gql`
query ($id: ID){
  folder(id:$id){
    id
    name
    parentId
    folders{
      name
      id
    }
  }
}
`;
export const GET_FOLDER_CHILDS = gql`
query($parentId:ID){
  childFolders(parentId:$parentId){
    id
    name
    parentId
    }
  }
`;
// Создание объекта Folder
export const ADD_FOLDER = gql`
mutation($name:String,$parentId:ID) {
  addFolder(name:$name,parentId:$parentId) {
    id
    name
    parentId
    folders{
      name
    }
  }
}
`;
// Обновление объекта Folder
export const UPDATE_FOLDER = gql`
mutation($id:ID!,$name:String!,$parentId:ID) {
  updateFolder(id:$id,name:$name,parentId:$parentId) {
    id
    name
    parentId
    folders{
      name
    }
  }
}
`;

// Составной запрос
// const name = 'name'
// const subData = `{id ${name} parentId}`
// const dataBody = `query($parentId:ID){childFolders(parentId:$parentId)${subData}}`
// const GET_FOLDER_CHILDS = gql`${dataBody}`;