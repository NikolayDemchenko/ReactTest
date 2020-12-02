import { SaveToJSON } from "./Function/ServiceFunction/Save";
import { createStyle } from "./Function/ServiceFunction/StyleManager";
import { TagManager } from "./Function/ServiceFunction/TagManager";
import { GetPageManager } from "./Function/ServiceFunction/PageManager";
import React from "react";

const Context = React.createContext();

export { SaveToJSON, createStyle, TagManager, GetPageManager, Context };
