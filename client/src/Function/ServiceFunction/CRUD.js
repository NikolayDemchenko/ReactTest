import shortid from "shortid";
export const createStyle = (data, name, id = shortid.generate()) => ({
  name,
  id,
  data,
});
