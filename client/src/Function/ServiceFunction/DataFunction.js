import shortid from "shortid";
export const createVariable = (data, name, id = shortid.generate()) => ({
  name,
  id,
  data,
});

export const createUniqueName = (name, names) => {
  names.forEach((element) => {
    if (element === name) {
      const namestr = name.replace(/\d/gi, "");
      const num = name.replace(/\D/gi, "");
      const namenum = Number(num) + 1;
      name = namestr + namenum;
    }
  });
  return name;
};
