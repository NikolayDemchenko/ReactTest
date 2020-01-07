const { gql } = require("apollo-server-express");

module.exports = gql`
 extend type Query {
    allTemplates: [Template]!
    template(id: ID!): Template
    folderTemplates(folderId: ID): [Template]!
  } 
  type Template {
    id: ID!
    name: String!
    folderId: ID!
    specsSheets: [SpecsSheet]
    updated:String!
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
  type Spec {
    id: ID!
    name: String!  
    unitId: ID    
  }
  input SpecInput {   
    name: String!  
    unitId: ID   
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
