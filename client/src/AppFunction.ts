import { SaveToJSON } from './Function/ServiceFunction/Save';
import { createVariable, createUniqueName } from './Function/ServiceFunction/DataFunction';
import { createTagManager } from './Function/ServiceFunction/TagManager';
import { StyleManager } from './Function/ServiceFunction/StyleManager';
import { IAppContext } from './Types/BaseTypes';
import { getRESTManager } from './Function/ServiceFunction/REST/RESTManager';
import React from 'react';

const Context = React.createContext<Partial<IAppContext>>({});
const NavigationContext = React.createContext({});

export {
	SaveToJSON,
	createVariable,
	createUniqueName,
	createTagManager,
	StyleManager,
	getRESTManager,
	Context,
	NavigationContext,
};
