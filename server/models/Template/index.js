const Instances = require("../Instance/model");
const Templates = require("./model");
const Groups = require("./Group/model");
// const Elements = require("./Group/Element/model");
const typeDefs = require("./typeDefs");
const { removeTemplate } = require("../../Function/cascadeDelete");

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
    saveTemplate: async (_, { template }) => {
      try {
        const { id, name, parentId, groups } = template;
        const item = await Templates.findByIdAndUpdate(
          id,
          {
            name,
            parentId,
            updated: new Date()
          },
          { new: true }
        );
        // Найти все исходные группы шаблона
       const _groups= await Groups.find({ parentId: id });
       let difference = _groups.filter(({name}) => !groups.includes({name}));
       console.log("difference :",difference);
        // Сравнить группы

        // const item = await Groups.findByIdAndUpdate(
        //   id,
        //   {
        //     name,
        //     parentId,
        //     updated: new Date()
        //   },
        //   { new: true }
        // );
        console.log("saveTemplate: ", template);
        return item;
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = { typeDefs, resolvers };
