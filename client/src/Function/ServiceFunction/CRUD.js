import { v4 as uuidv4 } from "uuid";
export const createStyle = (style, name) => ({
    id: uuidv4(),
    style,
    name,
  });