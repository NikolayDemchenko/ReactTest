import { SaveToJSON } from "./Function/ServiceFunction/Save";
import {
  createVariable,
  createUniqueName,
} from "./Function/ServiceFunction/DataFunction";
import { TagCRUD } from "./Function/ServiceFunction/TagFunctions";
import { GetRESTManager } from "./Function/ServiceFunction/RESTManager";
import React from "react";

const Context = React.createContext();

export {
  SaveToJSON,
  createVariable,
  createUniqueName,
  TagCRUD,
  GetRESTManager,
  Context,
};
