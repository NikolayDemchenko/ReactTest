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
    folderTemplates: (_, { folderId }) => {
      return Templates.find({ folderId });
    },
  },
  // Template: {
  //   templates: ({ id }) => {
  //     return Templates.find({ parentId: id });
  //   }
  // },
  Mutation: {
    addTemplate: async (_, { name, folderId, specsSheets }) => {
      const item = new Templates({
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
    deleteTemplate: async (_, { id }) => {
      try {
        await Templates.findByIdAndDelete(id);
        return true;
      } catch (err) {
        throw err;
      }
    },
    updateTemplate: async (_, { id, name, folderId, specsSheets }) => {
      try {
        const item = await Templates.findByIdAndUpdate(id, { name, folderId, specsSheets, updated: new Date() }, { new: true });
        return item;
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = { typeDefs, resolvers }
// module.exports = resolvers