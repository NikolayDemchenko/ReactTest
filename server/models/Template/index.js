const Instances = require("../Instance/model");
const Templates = require("./model");
const Groups = require("./Group/model");
const Elements = require("./Group/Element/model");
const typeDefs = require("./typeDefs");
const { saveTemplate } = require("./SaveTemplate");
const {
  removeTemplate,
  removeGroup,
  removeElement
} = require("../../Function/cascadeDelete");

const resolvers = {
  Query: {
    allTemplates: () => {
      return Templates.find({});
    },
    template: (_, { id }) => {
      return Templates.findById(id);
    }
  },
  Template: {
    instances: ({ id }) => {
      return Instances.find({ parentId: id });
    },
    groups: ({ id }) => {
      return Groups.find({ parentId: id });
    }
    // elements: ({ id }) => {
    //   return Elements.find({ templateId: id });
    // }
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
        await removeTemplate(id);
        return true;
      } catch (err) {
        throw err;
      }
    },
    updateTemplate: async (_, { id, name, parentId, groups }) => {
      try {
        const item = await Templates.findByIdAndUpdate(
          id,
          { name, parentId, groups, updated: new Date() },
          { new: true }
        );
        return item;
      } catch (err) {
        throw err;
      }
    },
    saveTemplate: (_, { template }) => {
      try {
      return saveTemplate(template, Templates, Groups, Elements );
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = { typeDefs, resolvers };
