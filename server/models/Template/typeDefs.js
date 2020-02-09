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
    updated:String!
    instances:[Instance]
  }
  input TemplateInput {
    id: ID!
    name: String!
    parentId: ID!
    groups: [GroupInput]
}

  extend type Mutation {
    addTemplate(
      name: String!,
      parentId: ID): Template
    saveTemplate(template:TemplateInput): Template
    deleteTemplate(id: ID!): Boolean
    updateTemplate(id: ID!, name: String!, parentId: ID!):Template
  }
`;
