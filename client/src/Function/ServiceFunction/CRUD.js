import { v4 as uuidv4 } from "uuid";
import shortid from "shortid";
export const createStyle = (style, name, id = shortid.generate()) => ({
  name,
  id,
  style,
});
