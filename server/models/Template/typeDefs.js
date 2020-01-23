const { gql } = require("apollo-server-express");

module.exports = gql`
 extend type Query {
    allTemplates: [Template]!
    template(id: ID!): Template 
  } 
  type Template {
    id: ID!
    name: String!
    parentId: ID!
    groups: [Group]
    elements: [Element] 
    updated:String!
    instances:[Instance]
  }

 

  extend type Mutation {
    addTemplate(
      name: String!,
      parentId: ID): Template
    deleteTemplate(id: ID!): Boolean
    updateTemplate(id: ID!, name: String!, parentId: ID!):Template
  }
`;
