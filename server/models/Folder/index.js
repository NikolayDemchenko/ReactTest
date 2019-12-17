const Folders = require("./model");
const typeDefs = require("./typeDefs");
const {getParents} = require("./getParents");

const resolvers = {
  Query: {
    allFolders: () => {
      return Folders.find({});
    },
    folder: (_, { id }) => {
      return Folders.findById(id);
    },
    childFolders: (_, { parentId }) => {
      return Folders.find({ parentId });
    }
  },
  Folder: {
    folders: ({ id }) => {
      return Folders.find({ parentId: id });
    },
    // parents: ({ parentId }) => {     
    //   return getParents([], parentId, Folders);
    // }
  },
  Mutation: {
    addFolder: async (_, { name, parentId }) => {
      const folder = new Folders({
        name,
        parentId,
        updated: new Date()
      });
      try {
        await folder.save();
        return folder;
      } catch (err) {
        throw err;
      }
    },
    deleteFolder: async (_, { id }) => {
      try {
        await Folders.findByIdAndDelete(id);
        return true;
      } catch (err) {
        throw err;
      }
    },
    updateFolder: async (_, { id, name, parentId }) => {
      try {
        const folder = await Folders.findByIdAndUpdate(
          id,
          { name, parentId, updated: new Date() },
          { new: true }
        );
        return folder;
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = { typeDefs, resolvers };
