import { SaveToJSON } from './Function/ServiceFunction/Save';
import { createVariable, createUniqueName } from './Function/ServiceFunction/DataFunction';
import { TagManager } from './Function/ServiceFunction/TagManager';
import { StyleManager } from './Function/ServiceFunction/StyleManager';

import { GetRESTManager } from './Function/ServiceFunction/RESTManager';
import React from 'react';

const Context = React.createContext();
const NavigationContext = React.createContext();

export { SaveToJSON, createVariable, createUniqueName, TagManager, StyleManager, GetRESTManager, Context,NavigationContext };
