const Folders = require("../models/Folder/model");
const Templates = require("../models/Template/model");
const Groups = require("../models/Template/Group/model");
const Elements = require("../models/Template/Group/Element/model");
const Instances = require("../models/Instance/model");

const removeFolder = async parentId => {
  const childrens = await Folders.find({ parentId });
  if (childrens !== []) {
    childrens.forEach(folder => {
      removeFolder(folder.id);
    });
  }
  removeTemplates(parentId);
  removeItemById(parentId, Folders);
};


const removeList = async (parentId, _items, remove) => {
  const items = await _items.find({ parentId });
  if (items !== []) {
    items.forEach(({ id }) => {
      remove(id);
    });
  }
};
const removeItemById = async (id, items) => {
  await items.findByIdAndDelete(id);
  // const item = await items.findById(id);
  // console.log("remove item:", item.name);
};
// Для удаления каждого списка передается родительский id, список объектов из базы и функция удаления со списком объектов, которая так же нужна для резольверов, чтобы иметь возможность вызвать отдельно каждую

const removeTemplates = parentId => {
  removeList(parentId, Templates, removeTemplate);
};
const removeTemplate = id => {
  removeGroups(id);
  removeItemById(id, Templates);
};

const removeGroups = parentId => {
  removeList(parentId, Groups, removeGroup);
};
const removeGroup = id => {
  removeElements(id);
  removeItemById(id, Groups);
};

const removeElements = parentId => {
  removeList(parentId, Elements, removeElement);
};
const removeElement = id => {
  removeItemById(id, Elements);
};

module.exports = { removeFolder, removeTemplate, removeGroup, removeElement };
