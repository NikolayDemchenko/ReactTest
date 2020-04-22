export const removePropByName = (obj, name) => {
    for (let key in obj) {
      if (key === name) {
        delete obj[key];
      }
    }
    // console.log("obj", obj);
    return obj;
  };