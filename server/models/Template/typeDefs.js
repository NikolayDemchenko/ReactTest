const { gql } = require("apollo-server-express");

module.exports = gql`
 extend type Query {
    allTemplates: [Template]!
    Template(id: ID!): Template
    folderTemplates(folderId: ID): [Template]!
  } 
  type Spec {
    id: ID!
    name: String!  
    unit: String!    
  }
  input SpecInput {   
    name: String!  
    unit: String!    
  }
  type SpecsSheet {
    id: ID!
    name: String!  
    specs: [Spec]    
  }
  input SpecsSheetInput {    
    name: String!  
    specs: [SpecInput]    
  }
  type Template {
    id: ID!
    name: String!
    folderId: ID!
    specsSheets: [SpecsSheet]
    updated:String!
  }
  extend type Mutation {
    addTemplate(
      name: String!,
       folderId: ID, 
       specsSheets: [SpecsSheetInput]): Template
    deleteTemplate(id: ID!): Boolean
    updateTemplate(id: ID!, name: String!, folderId: ID, specsSheets: [SpecsSheetInput]):Template
  }
`;
