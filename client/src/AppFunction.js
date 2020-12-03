import { SaveToJSON } from "./Function/ServiceFunction/Save";
import { createStyle } from "./Function/ServiceFunction/StyleManager";
import { TagCRUD } from "./Function/ServiceFunction/TagCRUD";
import { GetPageManager } from "./Function/ServiceFunction/PageManager";
import React from "react";

const Context = React.createContext();

export { SaveToJSON, createStyle, TagCRUD, GetPageManager, Context };
