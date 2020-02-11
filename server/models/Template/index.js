const Instances = require("../Instance/model");
const Templates = require("./model");
const Groups = require("./Group/model");
const Elements = require("./Group/Element/model");
const typeDefs = require("./typeDefs");
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
    saveTemplate: async (_, { template }) => {
      try {
        const { id, name, parentId, groups } = template;
        // Обновить локальные поля шаблона
        const item = await Templates.findByIdAndUpdate(
          id,
          {
            name,
            parentId,
            updated: new Date()
          },
          { new: true }
        );
        // Удалить группы:
        // Найти все исходные группы шаблона
        const _groups = await Groups.find({ parentId: id });
        // Преобразовать массивы групп в массивы только с id строкового типа для сравнения
        const _groupsId = _groups.map(_group => String(_group._id));
        const groupsId = groups.map(group => group.id);
        // Сравнить группы
        const groupsDifference = _groupsId.filter(x => !groupsId.includes(x));
        // Удалить разницу
        groupsDifference.forEach(id => removeGroup(id));
        // Удалить элементы каждой группы:

        groups.forEach(async group => {
          // Найти все исходные элементы группы
          const _elements = await Elements.find({ parentId: group.id });
          console.log("_elements", _elements);
          // Преобразовать массивы элементов в массивы только с id строкового типа для сравнения
          const _elementsId = _elements.map(element => String(element._id));
          const elementsId = group.elements.map(element => element.id);
          console.log('_elementsId', _elementsId)
          console.log('elementsId', elementsId)
          // Сравнить элементы
          const elementsDifference = _elementsId.filter(
            x => !elementsId.includes(x)
          );
          // Удалить разницу
          // elementsDifference.forEach(id => removeElement(id));
          console.log("elementsDifference", elementsDifference);
        });
        // const item = await Groups.findByIdAndUpdate(
        //   id,
        //   {
        //     name,
        //     parentId,
        //     updated: new Date()
        //   },
        //   { new: true }
        // );
        // console.log("saveTemplate: ", template);
        return item;
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = { typeDefs, resolvers };
