const cascadeDelete = async (id, items) => {
  const childrens = await items.find({ parentId: id });
  if (childrens != []) {
    childrens.forEach(item => {
    cascadeDelete(item.id,items);
    });
  }
    await items.findByIdAndDelete(id);
};
module.exports = { cascadeDelete };
