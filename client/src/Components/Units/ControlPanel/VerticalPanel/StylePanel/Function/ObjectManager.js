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
  for (let key in obj) {
    if (key === name) {
      delete obj[key];
    }
    if (typeof obj[key] === "object") {
      removePropByName(obj[key], name);
    }
  }
  return obj;
};
export const removeThisLevelPropByName = (obj, name) => {
  for (let key in obj) {
    if (key === name) {
      delete obj[key];
    }   
  }
  return obj;
};
