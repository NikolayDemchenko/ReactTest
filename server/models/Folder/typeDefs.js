const { gql } = require("apollo-server-express");

module.exports = gql`
  type Query {
    allFolders: [Folder]!
    folder(id: ID!): Folder
    parentFolders(parentId: ID): [Folder]!
  }
  type Folder {
    id: ID!
    name: String!
    parentId: ID
    folders: [Folder]
    templates:[Template]
  }
  type Mutation {
    addFolder(name: String!, parentId: ID): Folder
    deleteFolder(id: ID!): Boolean
    updateFolder(id: ID!, name: String!, parentId: ID):Folder
  }
`;
