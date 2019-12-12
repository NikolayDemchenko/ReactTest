const Folders = require("./model");
const typeDefs = require('./typeDefs');

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
    },
  },
  Folder: {
    folders: ({ id }) => {
      return Folders.find({ parentId: id });
    },
    parents: ({ parentId }) => {
      const getParents = (parents, parentId) => {
        if (parentId != null) {
          const folder = Folders.findById(parentId);
          parents.push(folder)         
          getParents(parents, folder.parentId) 
          return parents
        } else {
          // console.log(parents)
          return parents
        }
      }
      return getParents([], parentId)
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
        await Folders.findByIdAndDelete(id);
        return true;
      } catch (err) {
        throw err;
      }
    },
    updateFolder: async (_, { id, name, parentId }) => {
      try {
        const folder = await Folders.findByIdAndUpdate(id, { name, parentId, updated: new Date() }, { new: true });
        return folder;
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = { typeDefs, resolvers }
