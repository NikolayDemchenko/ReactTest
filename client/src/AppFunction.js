import { SaveToJSON } from "./Function/ServiceFunction/Save";
import {
  createVariable,
  createUniqueName,
} from "./Function/ServiceFunction/DataFunction";
import { TagCRUD } from "./Function/ServiceFunction/TagFunctions";
import { GetPageManager } from "./Function/ServiceFunction/PageManager";
import React from "react";

const Context = React.createContext();

export {
  SaveToJSON,
  createVariable,
  createUniqueName,
  TagCRUD,
  GetPageManager,
  Context,
};
