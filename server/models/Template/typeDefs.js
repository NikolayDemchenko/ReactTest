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
  }
  type Group {
    id: ID!
    name: String!  
    elements: [Element]    
  }
  input GroupInput {    
    name: String!  
    Elements: [ElementInput]    
  }
  type Element {
    id: ID!
    name: String!  
    unitId: ID    
  }
  input ElementInput {   
    name: String!  
    unitId: ID   
  }

  extend type Mutation {
    addTemplate(
      name: String!,
      parentId: ID, 
       Groups: [GroupInput]): Template
    deleteTemplate(id: ID!): Boolean
    updateTemplate(id: ID!, name: String!, parentId: ID, Groups: [GroupInput]):Template
  }
`;
