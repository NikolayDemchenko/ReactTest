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

// Добавить в объект новое поле ниже указанного поля
export const addNewPropDown = (object, property, name, value) => ({
  ...getTopData(object, property),
  ...property,
  [name]: value,
  ...object,
});
// Добавить в объект новое поле выше указанного поля
export const addNewPropUp = (object, property, name, value) => {
    const item={
        ...getTopData(object, property),
        [name]: value,
        ...object,
      };
      // console.log('item', item)
  return item
};
