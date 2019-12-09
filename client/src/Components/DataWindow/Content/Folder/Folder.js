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
export const GET_ALL_FOLDERS = gql`
query AllFolders{
  allFolders @client{
    id
    name 
    parentId
  }
}`;

export const resolvers={
    Mutation: {
        newFolder: (_root, variables, { cache, getCacheKey }) => {
        const id = getCacheKey({ __typename: 'TodoItem', id: variables.id })

        const todo = cache.readFragment({ fragment, id });
        const data = { ...todo, completed: !todo.completed };
        cache.writeData({ id, data });
        return null;
      },
    },
  };

  Mutation: {
    addFolder: async (_, { name, parentId }) => {
      const folder = new Folders({
        name,
        parentId,
        updated: new Date()
      });
      try {
        await folder.save();
        return folder;
      } catch (err) {
        throw err;
      }