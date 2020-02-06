const { gql } = require("apollo-server-express");

module.exports = gql`
  extend type Query {
    allGroups: [Group]!
    group(id: ID!): Group
  }

  type Group {
    id: ID!
    parentId: ID!
    name: String!
    visible: Boolean!
    filter: Boolean!
    updated: String
    elements: [Element]
  }

  extend type Mutation {
    addGroup(
      name: String!
      parentId: ID!
      visible: Boolean!
      filter: Boolean!
    ): Group
    deleteGroup(id: ID!): Boolean
    updateGroup(
      id: ID!
      name: String!
      parentId: ID!
      visible: Boolean!
      filter: Boolean!
    ): Group
  }
`;
