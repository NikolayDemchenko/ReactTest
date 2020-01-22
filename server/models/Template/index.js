const Instances = require("../Instance/model");
const Templates = require("./model");
const typeDefs = require('./typeDefs');

const resolvers = {
  Query: {
    allTemplates: () => {
      return Templates.find({});
    },
    template: (_, { id }) => {
      return Templates.findById(id);
    },
    folderTemplates: (_, { parentId }) => {
      return Templates.find({ parentId });
    },
  },
  Template: {
    instances: ({ id }) => {
      return Instances.find({ parentId: id });
    }
  },
  Mutation: {
    addTemplate: async (_, { name, parentId, groups }) => {
      const item = new Templates({
        name,
        parentId,
        groups,
        updated: new Date()
      });
      try {
        await item.save();
        return item;
      } catch (err) {
        throw err;
      }
    },
    deleteTemplate: async (_, { id }) => {
      try {
        await Templates.findByIdAndDelete(id);
        return true;
      } catch (err) {
        throw err;
      }
    },
    updateTemplate: async (_, { id, name, parentId, groups }) => {
      try {
        console.log("Проблема тут!");
        const item = await Templates.findByIdAndUpdate(id, { name, parentId, groups, updated: new Date() }, { new: true });
        return item;
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = { typeDefs, resolvers }
