export default function renameProp(object, propName, newPropName) {
  //   const arr = Object.values(object).map((v) => Object.values(v));
  //   function renameProperty(obj, fromKey, toKey) {
  //     obj[toKey] = obj[fromKey];
  //     delete obj[fromKey];
  //     console.log('obj', obj)
  // }
  let arr = [];
  for (let key in object) {
    arr.push({ [key]: object[key] });
  }
  let newArr = arr.map((el) => {
    if (Object.keys(el)[0] === propName) {
      return { [newPropName]: Object.values(el)[0] };
    }
    return el;
  });
  console.log("!!arr", arr);
  console.log("!!newArr", newArr);
  console.log("!!obj", Object.assign(...newArr));

  console.log("propName", propName);
  console.log("newPropName", newPropName);
  //   return renameProperty(object, propName, newPropName)
  return  Object.assign(...newArr)
}
