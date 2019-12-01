const { gql } = require("apollo-server-express");

module.exports = gql`
scalar Object

 type Instance {
    id: ID!   
    templateId: ID!
    price:Quantity!
    quantity:Quantity!
    delivery: [ID!]
    payment: [ID!]
    location:Object
    specsSheets: [SpecsSheet]
    updated:String!
  }
  type Quantity {
    values: [Value]  
    unit: ID!    
  }
  input QuantityInput{
    values: [ValueInput]  
    unit: ID! 
  }
  type Value {   
    value: Object
    updated: String!    
  }
  input ValueInput{
    value: Object
    updated: String! 
  }
  type InstanceSpecsSheet {
    id: ID! 
    specs: [Spec]    
  }
  input InstanceSpecsSheetInput {    
    id: ID!  
    specs: [InstanceSpecInput]    
  }
  type InstanceSpec {
    id: ID!  
    value: Object   
  }
  input InstanceSpecInput {   
    id: ID!  
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
