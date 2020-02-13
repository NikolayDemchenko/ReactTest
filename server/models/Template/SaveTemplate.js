const { removeGroup, removeElement } = require("../../Function/cascadeDelete");

const GetDifference = (firstArr, lastArr) =>
  firstArr.filter(f => !lastArr.find(l => l.id == f.id));
const GetSame = (firstArr, lastArr) =>
  firstArr.filter(f => lastArr.find(l => l.id == f.id));

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
  const groupsDelete = GetDifference(_groups, groups);
  // Удалить группы
  groupsDelete.forEach(({ id }) => removeGroup(id));
  // Найти в новом массиве группы отсутствующие в старом массиве
  const groupsAdd = GetDifference(groups, _groups);
  // Создать группы
  groupsAdd.forEach(async group => {
    if (group.name !== "") {
      try {
        const item = await new Groups({ ...group }).save();
        const newGroup = { ...group, id: item._id };
        console.log("newGroup", newGroup);
        CreateElements(newGroup);
      } catch (err) {
        throw err;
      }
    }
  });
  // Найти общие группы
  const groupsUpdate = GetSame(groups, _groups);
  // Обновить группы
  groupsUpdate.forEach(async group => {
    if (group.name !== "") {
      try {
        await Groups.findByIdAndUpdate(
          group.id,
          { ...group, updated: new Date() },
          { new: true }
        );
        UpdateElements(group);
      } catch (err) {
        throw err;
      }
    }
  });
  // console.log("groupsAdd", groupsAdd);
  // console.log("groupsUpdate", groupsUpdate);
  // console.log("groupsDelete", groupsDelete);

  // Обновить элементы группы
  const UpdateElements = async ({ id, elements }) => {
    // Найти все исходные элементы группы
    const _elements = await Elements.find({ parentId: id });
    DeleteElements(_elements, elements);
    AddElements(_elements, elements);
    _UpdateElements(_elements, elements);
  };

  // Метод удаления элементов
  const DeleteElements = (_elements, elements) => {
    // Сравнить элементы
    const elementsDelete = GetDifference(_elements, elements);
    // Удалить разницу
    elementsDelete.forEach(el => removeElement(el._id));
    // console.log("elementsDelete", elementsDelete);
  };
  // Метод добавления элементов
  const AddElements = (_elements, elements) => {
    // Сравнить элементы
    const elementsAdd = GetDifference(elements, _elements);
    // Создать элементы
    elementsAdd.forEach(async el => {
      if (el.name !== "") {
        try {
          await new Elements({ ...el }).save();
        } catch (err) {
          throw err;
        }
      }
    });
    // console.log("elementsAdd", elementsAdd);
  };
  const CreateElements = async ({ id, elements }) => {
    // // Найти все исходные элементы группы
    // const _elements = await Elements.find({ parentId: id });
    // // Сравнить элементы
    // const elementsAdd = GetDifference(elements, _elements);
    // Создать элементы
    elements.forEach(async element => {
      if (element.name !== "") {
        try {
          element.parentId = id;
          const el = await new Elements({ ...element, parentId: id }).save();
          console.log("element", el);
        } catch (err) {
          throw err;
        }
      }
    });
  };
  // Метод обновления элементов
  const _UpdateElements = (_elements, elements) => {
    // Сравнить элементы
    const elementsUpdate = GetSame(elements, _elements);
    // Обновить элементы
    elementsUpdate.forEach(async el => {
      if (el.name !== "") {
        try {
          await Elements.findByIdAndUpdate(
            el.id,
            { ...el, updated: new Date() },
            { new: true }
          );
        } catch (err) {
          throw err;
        }
      }
    });
    // console.log("elementsUpdate", elementsUpdate);
  };

  return Templates.findById(id);
};
module.exports = { saveTemplate };
