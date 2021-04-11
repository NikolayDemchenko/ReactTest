export  const RenameObjectProperty=(object:{[name:string]:any}, propName:string, newPropName:string) =>{
  const arr = Object.keys(object).map((name:string) => {
    if (name === propName) {
      return { [newPropName]: object[name] };
    } else return {[name]:object[name]};
  });
  return Object.assign(arr[0],...arr);
}