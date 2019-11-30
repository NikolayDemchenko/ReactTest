const { gql } = require("apollo-server-express");

module.exports = gql`
 type Instance {
    id: ID!   
    templateId: ID!
    price:Price!
    quantity:Quantity!
    delivery: [ID!]
    payment: [ID!]
    location:String!
    specsSheets: [SpecsSheet]
    updated:String!
  }
  type Price {
    values: [Value]  
    unit: ID!    
  }
  type Value {   
    value: Float
    updated: String!    
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
 extend type Query {
    allInstances: [Instance]!
    Instance(id: ID!): Instance
    folderInstances(templateId: ID): [Instance]!
  } 
 
 
  extend type Mutation {
    addInstance(
      name: String!,
       folderId: ID, 
       specsSheets: [SpecsSheetInput]): Instance
    deleteInstance(id: ID!): Boolean
    updateInstance(id: ID!, name: String!, folderId: ID, specsSheets: [SpecsSheetInput]):Instance
  }
`;
