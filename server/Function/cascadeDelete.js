const Folders = require("../models/Folder/model");
const Templates = require("../models/Template/model");
const Groups = require("../models/Template/Group/model");
const Elements = require("../models/Template/Group/Element/model");
const Instances = require("../models/Instance/model");

const removeFolder = async (id) => {
  const childrens = await Folders.find({ parentId: id });
  if (childrens !== []) {
    childrens.forEach((folder) => {
      console.log("remove folder",folder);
      removeFolder(folder.id);
    });
  }
  await removeTemplates(id)
  // await items.findByIdAndDelete(id);
};

const removeTemplates = async (id) => {
  const templates = await Templates.find({ parentId: id });
  if (templates !== []) {
     templates.forEach(item => {
      removeTemplate(item)
       console.log("template:",item);
    });
  }
  // console.log("template:",templates);
};
const removeTemplate = async (item) => {
  removeGroups(item)
  // await Templates.findByIdAndDelete(item.id);  
  console.log("template:",item);
};



module.exports = { removeFolder };
