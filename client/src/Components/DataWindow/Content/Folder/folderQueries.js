import gql from "graphql-tag";

// Запрос на получение FolderId
export const GET_FOLDER_ID = gql`
  query GetFolderId {
    FolderId @client
  }
`;

export const GET_ALL_FOLDERS = gql`
  {
    allFolders {
      id
      name
      parentId
      folders {
        name
      }
    }
  }
`;
// Получить все дочерние Folders
export const GET_FOLDER_CHILDS = gql`
  query ChildFolders($parentId: ID) {
    childFolders(parentId: $parentId) {
      id
      name
      parentId
    }
  }
`;
// Получить Folder по id со всеми дочерними Folders
export const GET_FOLDER_BY_ID = gql`
  query GetFolderById($id: ID!) {
    folder(id: $id) {
      name
      id
      parentId
      folders {
        name
        id
        parentId
      }
    }
  }
`;

// Создание формы для создания объекта Folder с передачей Folder
export const NEW_FOLDER = gql`
  mutation NewFolder($folder: Folder) {
    newFolder(folder: $folder) @client 
  }
`;
// Создание формы для создания объекта ParentFolder
export const NEW_PARENT_FOLDER = gql`
  mutation NewParentFolder($name: String, $parentId: ID) {
    newParentFolder(name: $name, parentId: $parentId) @client {
      id
      name
      parentId
    }
  }
`;
// Добавление объекта Folder в базу
export const ADD_FOLDER = gql`
  mutation AddFolder($name: String!, $parentId: ID) {
    addFolder(name: $name, parentId: $parentId) {
      id
      name
      parentId
    }
  }
`;
// Обновление объекта Folder
export const UPDATE_FOLDER = gql`
  mutation UpdateFolder($id: ID!, $name: String!, $parentId: ID) {
    updateFolder(id: $id, name: $name, parentId: $parentId) {
      id
      name
      parentId
    }
  }
`;
// Удаление объекта Folder
export const DELETE_FOLDER = gql`
  mutation DeleteFolder($id: ID!) {
    deleteFolder(id: $id)
  }
`;
// Фейковый запрос для рефетча мутации, при удалении не сохраненного объекта
export const REMOVE_NEW_FOLDER = gql`
  mutation RemoveNewFolder{
    removeNewFolder @client
  }
`;

// Составной запрос
// const name = 'name'
// const subData = `{id ${name} parentId}`
// const dataBody = `query($parentId:ID){childFolders(parentId:$parentId)${subData}}`
// const GET_FOLDER_CHILDS = gql`${dataBody}`;
