const Group = require("./model");
const Element = require("./Element/model");
const typeDefs = require("./typeDefs");

const resolvers = {
  Query: {
    allGroups: () => {
      return Group.find({});
    },
    group: (_, { id }) => {
      return Group.findById(id);
    }
  },
  Group: {
    elements: ({ id }) => {
      return Element.find({ groupId: id });
    }
  },
  Mutation: {
    addGroup: async (_, { name, parentId }) => {
     
      const item = new Group({
        name,
        parentId,
        updated: new Date()
      });
      try {
        await item.save();
        return item;
      } catch (err) {
        throw err;
      }
    },
    deleteGroup: async (_, { id }) => {
    
      try {
        await Group.findByIdAndDelete(id);
        return true;
      } catch (err) {
        throw err;
      }
    },
    updateGroup: async (_, { id, name, parentId }) => {
      console.log("!!!!!!!!!!!Сохранено");
      try {
        const item = await Group.findByIdAndUpdate(
          id,
          { name, parentId, updated: new Date() },
          { new: true }
        );
        return item;
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = { typeDefs, resolvers };
