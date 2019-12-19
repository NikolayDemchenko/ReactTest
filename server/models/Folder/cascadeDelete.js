const cascadeDelete = async (id, items) => {
  const childrens = await items.find({ parentId: id });
  if (childrens != []) {
    childrens.forEach(({id}) => {
    cascadeDelete(id,items);
    });
  }
    await items.findByIdAndDelete(id);
};
module.exports = { cascadeDelete };
