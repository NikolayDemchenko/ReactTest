const { gql } = require("apollo-server-express");

module.exports = gql`
  extend type Query {
    allElement: [Element]!
    element(id: ID!): Element
  }
  type Element {
    name: String!
    parentId: ID!
    visible: Boolean!
    filter: Boolean!
    id: ID!
    unitId: ID
  }
  input ElementInput {
    name: String!
    parentId: ID!
    visible: Boolean!
    filter: Boolean!
    id: ID!
    unitId: ID
  }

  extend type Mutation {
    addElement(
      name: String!
      parentId: ID!
      visible: Boolean!
      filter: Boolean!
    ): Element
    deleteElement(id: ID!): Boolean
    updateElement(
      id: ID!
      name: String!
      parentId: ID!
      visible: Boolean!
      filter: Boolean!
    ): Element
  }
`;
