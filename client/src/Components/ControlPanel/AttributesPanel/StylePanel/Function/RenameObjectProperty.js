export default function renameProp(object, propName, newPropName) {
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
  // console.log("!!arr", arr);
  // console.log("!!newArr", newArr);
  // console.log("!!obj", Object.assign(...newArr));
  // console.log("propName", propName);
  // console.log("newPropName", newPropName);
  return  Object.assign(...newArr)
}
