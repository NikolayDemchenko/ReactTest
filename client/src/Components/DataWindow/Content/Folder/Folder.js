import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type Mutation {
    newFolder(name: String!, parentId: ID): Folder
  }
`;

export const NEW_FOLDER = gql`
mutation NewFolder($name:String,$parentId:ID) {
    newFolder (name:$name,parentId:$parentId) @client{
    id
    name
    parentId
  }
}
`;
const GET_FOLDER_CHILDS = gql`
query($parentId:ID){
  childFolders(parentId:$parentId)@client{
    id
    name
    parentId
    }
  }
`;
export const GET_ALL_FOLDERS = gql`
query {
  childFolders {
    id
    name 
    parentId
  }
}`;

export const resolvers={
    Mutation: {
        newFolder: (_, {name,parentId}, { cache, getCacheKey }) => {
          const { Folders } = cache.readQuery({ 
            query: gql`
            query childFolders {[Folder]
            }
          `});
   
          // console.log(Folders);
          // cache.writeQuery({ query: GET_ALL_FOLDERS, data });
        return null;
      },
    },
  };
