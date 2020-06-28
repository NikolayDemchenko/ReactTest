export default function renameProperty(object, propName, newPropName) {
  let arr = [];
  for (let key in object) {
    arr.push({ [key]: object[key] });
  }
  let newArr = arr.map((el) => {
    if (Object.keys(el)[0] === propName) {
      return { [newPropName]: Object.values(el)[0] };
    } else return el;
  });

  return Object.assign(...newArr);
}
