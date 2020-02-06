const Group = require("./model");
const Element = require("./Element/model");
const typeDefs = require("./typeDefs");
const { removeGroup } = require("../../../Function/cascadeDelete");

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
      return Element.find({ parentId: id });
    }
  },
  Mutation: {
    addGroup: async (_, { name, parentId, visible, filter }) => {
      const item = new Group({
        name,
        visible,
        filter,
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
        await removeGroup(id);
        return true;
      } catch (err) {
        throw err;
      }
    },
    updateGroup: async (_, { id, name, visible, filter, parentId }) => {
      console.log("!!!!!!!!!!!Сохранено");
      try {
        const item = await Group.findByIdAndUpdate(
          id,
          { name, visible, filter, parentId, updated: new Date() },
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
