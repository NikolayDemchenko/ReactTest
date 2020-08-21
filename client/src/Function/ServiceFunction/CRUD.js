import shortid from "shortid";
export const createStyle = (style, name, id = shortid.generate()) => ({
  name,
  id,
  style,
});
