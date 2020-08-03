// Получить объект с полями выше указанного поля
const getTopData = (object, property) => {
  let newObject;
  for (let key in object) {
    if (key !== Object.keys(property)[0]) {
      newObject = { ...newObject, [key]: object[key] };
    } else {
      // console.log("newObject", newObject);
      return newObject;
    }
  }
};
// Получить объект с полями выше указанного поля и указанным полем
export const getTopDataWithProp = (object, property) => ({
  ...getTopData(object, property),
  ...property,
});

const getArray = (obj) => {
  const arr = [];
  for (let key in obj) {
    arr.push({ [key]: obj[key] });
  }
  return arr;
};
// Добавить в объект новое поле ниже указанного поля
export const addNewPropDown = (object, targetProp, draggedProp) => {
  const obj = {
    ...getTopData(object, targetProp),
    ...targetProp,
    ...draggedProp,
    ...object,
  };
  const arr = getArray(obj);
  return { obj, arr };
};
// Добавить в объект новое поле выше указанного поля
export const addNewPropUp = (object, targetProp, draggedProp) => {
  const obj = {
    ...getTopData(object, targetProp),
    ...draggedProp,
    ...object,
  };

  const arr = getArray(obj);
  return { obj, arr };
};


export const removePropByName = (obj, name) => {
  const thisObj={...obj}
  for (let key in thisObj) {
    if (key === name) {
      delete thisObj[key];
    }
    if (typeof thisObj[key] === "object") {
      removePropByName(thisObj[key], name);
    }
  }
  return thisObj;
};

export const removeThisLevelPropByName = (obj, name) => {
  const thisObj={...obj}
  for (let key in thisObj) {
    if (key === name) {
      delete thisObj[key];
    }   
  }
  return thisObj;
};

  // Удаляет у объекта все свойства являющиеся объектами
export const clearObject = (obj) => {
  const thisObj={...obj}
  for (let key in thisObj) {
    if (typeof thisObj[key] === "object") {
      delete thisObj[key];
    }
  }
  return thisObj;
};