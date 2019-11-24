import gql from 'graphql-tag';

const GET_ALL_FOLDERS = gql`
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


const GET_FOLDER_BY_ID = gql`
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
const name ='name'
const subData =`{id ${name} parentId}`
const dataBody = `query($parentId:ID){childFolders(parentId:$parentId)${subData}}`
const GET_FOLDER_CHILDS = gql`${dataBody}`;
export { GET_ALL_FOLDERS, GET_FOLDER_BY_ID, GET_FOLDER_CHILDS };