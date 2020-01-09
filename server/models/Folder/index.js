const Folders = require("./model");
const Templates = require("../Template/model");
const typeDefs = require("./typeDefs");
const {cascadeDelete} = require("./cascadeDelete");

const resolvers = {
  Query: {
    allFolders: () => {
      return Folders.find({});
    },
    folder: (_, { id }) => {
      return Folders.findById(id);
    },
    parentFolders: (_, { parentId }) => {
      return Folders.find({ parentId });
    }
  },
  Folder: {
    folders: ({ id }) => {
      return Folders.find({ parentId: id });
    },
    templates:({ id })=>{
      return Templates.find({ parentId: id });
    }
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
        await cascadeDelete(id,Folders);
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
