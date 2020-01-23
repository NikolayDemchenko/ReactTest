const Element = require("./model");
const typeDefs = require("./typeDefs");

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
    addElement: async (_, { name, templateId, groupId }) => {
      const item = new Element({
        name,
        templateId,
        groupId,
        updated: new Date()
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
        await Element.findByIdAndDelete(id);
        return true;
      } catch (err) {
        throw err;
      }
    },
    updateElement: async (_, { id,name, templateId, groupId }) => {
      try {
        const item = await Element.findByIdAndUpdate(
          id,
          { name, templateId, groupId, updated: new Date() },
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
