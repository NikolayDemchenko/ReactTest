const { GraphQLScalarType } = require('graphql')
const { Kind } = require('graphql/language')
// Кастомный graphql тип Object
const ObjectType = new GraphQLScalarType({
  name: 'Object',
  description: 'Arbitrary object',
  parseValue: (value) => {
    return typeof value === 'object' ? value
      : typeof value === 'string' ? JSON.parse(value)
        : null
  },
  serialize: (value) => {
    return typeof value === 'object' ? value
      : typeof value === 'string' ? JSON.parse(value)
        : null
  },
  parseLiteral: (ast) => {
    switch (ast.kind) {
      case Kind.STRING: return JSON.parse(ast.value)
      case Kind.OBJECT: throw new Error(`Not sure what to do with OBJECT for ObjectScalarType`)
      default: return null
    }
  }
})
const Instances = require("./model");
const typeDefs = require('./typeDefs');

const resolvers = {
  Object: ObjectType,
  Query: {
    allInstances: () => {
      return Instances.find({});
    },
    Instance: (_, { id }) => {
      return Instances.findById(id);
    },
    folderInstances: (_, { templateId }) => {
      return Instances.find({ templateId });
    },
  },

  Mutation: {
    addInstance: async (_, { templateId, price, quantity, delivery, payment, location, specsSheets }) => {
      const item = new Instances({
        templateId, price, quantity, delivery, payment, location, specsSheets,
        updated: new Date()
      });
      try {
        await item.save();
        return item;
      } catch (err) {
        throw err;
      }
    },
    deleteInstance: async (_, { id }) => {
      try {
        await Instances.findByIdAndDelete(id);
        return true;
      } catch (err) {
        throw err;
      }
    },
    updateInstance: async (_, { templateId, price, quantity, delivery, payment, location, specsSheets }) => {
      try {
        const item = await Instances.findByIdAndUpdate(id, { templateId, price, quantity, delivery, payment, location, specsSheets, updated: new Date() }, { new: true });
        return item;
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = { typeDefs, resolvers }