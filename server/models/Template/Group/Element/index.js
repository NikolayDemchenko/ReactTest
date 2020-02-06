const Element = require("./model");
const typeDefs = require("./typeDefs");
const { removeElement } = require("../../../../Function/cascadeDelete");

const resolvers = {
  Query: {
    allElement: () => {
      return Element.find({});
    },
    element: (_, { id }) => {
      return Element.findById(id);
    }
  },

  Mutation: {
    addElement: async (_, { name, parentId, visible, filter }) => {
      const item = new Element({
        name,
        parentId,
        updated: new Date(),
        visible,
        filter
      });
      try {
        await item.save();
        return item;
      } catch (err) {
        throw err;
      }
    },
    deleteElement: async (_, { id }) => {
      try {
        await removeElement(id);
        return true;
      } catch (err) {
        throw err;
      }
    },
    updateElement: async (_, { id, name, parentId, visible, filter }) => {
      try {
        const item = await Element.findByIdAndUpdate(
          id,
          { name, parentId, updated: new Date(), visible, filter },
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
