const { removeGroup, removeElement } = require("../../Function/cascadeDelete");
const saveTemplate = async (template, Templates, Groups, Elements) => {
  const { id, name, parentId, groups } = template;
  // Обновить локальные поля шаблона
  await Templates.findByIdAndUpdate(
    id,
    {
      name,
      parentId,
      updated: new Date()
    },
    { new: true }
  );

  // Найти все исходные группы шаблона
  const _groups = await Groups.find({ parentId: id });
  // Сравнить группы
  // Найти в старом массиве группы отсутствующие в новом массиве
  const groupsDelete = _groups.filter(
    group => !groups.find(item => item.id == group.id)
  );
  // Удалить группы
  groupsDelete.forEach(({ id }) => removeGroup(id));

  // Найти в новом массиве группы отсутствующие в старом массиве
  const groupsAdd = groups.filter(
    group => !_groups.find(item => item.id == group.id)
  );
  // Создать группы
  groupsAdd.forEach(async ({ name, parentId, visible, filter }) => {
    try {
      await new Groups({
        name,
        visible,
        filter,
        parentId
      }).save();
    } catch (err) {
      throw err;
    }
  });
  // Найти общие группы
  const groupsUpdate = groups.filter(group =>
    _groups.find(item => item.id == group.id)
  );
  // Обновить группы
  groupsUpdate.forEach(async ({ id, name, visible, filter, parentId }) => {
     try {
      const item = await Groups.findByIdAndUpdate(
        id,
        { name, visible, filter, parentId, updated: new Date() },
        { new: true }
      );
      return item;
    } catch (err) {
      throw err;
    }
  });
  console.log("groupsAdd", groupsAdd);
  console.log("groupsUpdate", groupsUpdate);
  console.log("groupsDelete", groupsDelete);
  // Удалить элементы каждой группы:

  // groups.forEach(async group => {
  //   // Найти все исходные элементы группы
  //   const _elements = await Elements.find({ parentId: group.id });
  //   console.log("_elements", _elements);
  //   // Преобразовать массивы элементов в массивы только с id строкового типа для сравнения
  //   const _elementsId = _elements.map(({ _id }) => String(_id));
  //   const elementsId = group.elements.map(({ id }) => id);
  //   console.log("_elementsId", _elementsId);
  //   console.log("elementsId", elementsId);
  //   // Сравнить элементы
  //   const elementsDifference = _elementsId.filter(x => !elementsId.includes(x));
  //   // Удалить разницу
  //   elementsDifference.forEach(id => removeElement(id));
  //   console.log("elementsDifference", elementsDifference);
  // });
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
  return Templates.findById(id);
};
module.exports = { saveTemplate };
