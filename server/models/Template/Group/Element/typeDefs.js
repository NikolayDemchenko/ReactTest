const { gql } = require("apollo-server-express");

module.exports = gql`
  extend type Query {
    allElement: [Element]!
    element(id: ID!): Element
  }
  type Element {
    name: String!
    templateId: ID!
    groupId: ID
    id: ID!
    unitId: ID
  }

  extend type Mutation {
    addElement(name: String!, templateId: ID!, groupId: ID): Element
    deleteElement(id: ID!): Boolean
    updateElement(id: ID!, name: String!, templateId: ID!, groupId: ID): Element
  }
`;
