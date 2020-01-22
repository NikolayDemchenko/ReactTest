const { gql } = require("apollo-server-express");

module.exports = gql`
 extend type Query {
    allTemplates: [Template]!
    template(id: ID!): Template
    folderTemplates(parentId: ID): [Template]!
  } 
  type Template {
    id: ID!
    name: String!
    parentId: ID!
    groups: [Group]
    updated:String!
    instances:[Instance]
  }
  type Group {
    id: ID!
    name: String!  
    elements: [Element]    
  }
  input GroupInput {
    id: ID    
    name: String!  
    elements: [ElementInput]    
  }
  type Element {
    id: ID!
    name: String!  
    unitId: ID    
  }
  input ElementInput {
    id:ID   
    name: String!  
    unitId: ID   
  }

  extend type Mutation {
    addTemplate(
      name: String!,
      parentId: ID, 
      groups: [GroupInput]): Template
    deleteTemplate(id: ID!): Boolean
    updateTemplate(id: ID!, name: String!, parentId: ID!, groups: [GroupInput]):Template
  }
`;
