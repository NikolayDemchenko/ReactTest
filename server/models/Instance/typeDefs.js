const { gql } = require("apollo-server-express");

module.exports = gql`
scalar Object

 type Instance {
    id: ID!   
    templateId: ID!
    price:Quantity
    quantity:Quantity
    delivery: [ID!]
    payment: [ID!]
    location:Object
    specsSheets: [InstanceSpecsSheet]
    updated:String
  }
  type Quantity {
    values: [Value]  
    unitId: ID!    
  }
  input QuantityInput{
    values: [ValueInput]  
    unitId: ID! 
  }
  type Value {   
    value: Object
    updated: String!    
  }
  input ValueInput{
    value: Object
    updated: String 
  }
  type InstanceSpecsSheet {
    specsSheetId: ID! 
    specs: [InstanceSpec]    
  }
  input InstanceSpecsSheetInput {    
    specsSheetId: ID!  
    specs: [InstanceSpecInput]    
  }
  type InstanceSpec {
    specId: ID!  
    value: Object   
  }
  input InstanceSpecInput {   
    specId: ID!  
    value: Object    
  }

 extend type Query {
    allInstances: [Instance]!
    Instance(id: ID!): Instance
    templateInstances(templateId: ID): [Instance]!
  }  
 
  extend type Mutation {
    addInstance(
    templateId: ID,
    price:QuantityInput,
    quantity:QuantityInput,
    delivery: [ID],
    payment: [ID],
    location:Object,
    specsSheets: [InstanceSpecsSheetInput]): Instance
    deleteInstance(id: ID!): Boolean
    updateInstance(
    id: ID!,
    templateId: ID,
    price:QuantityInput,
    quantity:QuantityInput,
    delivery: [ID],
    payment: [ID],
    location:Object,
    specsSheets: [InstanceSpecsSheetInput]):Instance
  }
`;
