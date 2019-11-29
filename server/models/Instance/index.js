const Instances = require("./model");
const typeDefs = require('./typeDefs');

const resolvers = {
  Query: {
    allInstances: () => {
      return Instances.find({});
    },
    Instance: (_, { id }) => {
      return Instances.findById(id);
    },
    folderInstances: (_, { folderId }) => {
      return Instances.find({ folderId });
    },
  },
  Instance: {
    Instances: ({ id }) => {
      return Instances.find({ parentId: id });
    }
  },
  Mutation: {
    addInstance: async (_, { name, folderId, specsSheets }) => {
      const item = new Instances({
        name,
        folderId,
        specsSheets,
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
    updateInstance: async (_, { id, name, folderId, specsSheets }) => {
      try {
        const item = await Instances.findByIdAndUpdate(id, { name, folderId, specsSheets, updated: new Date() }, { new: true });
        return item;
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = { typeDefs, resolvers }