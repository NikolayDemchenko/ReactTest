const getParents = async (parents, id, items) => {
  if (id == null) {
    return parents;
  } else {
    const item = await items.findById(id); 
    parents.push(item);    
    return getParents(parents, item.parentId, items);
  }
};  
module.exports = { getParents};