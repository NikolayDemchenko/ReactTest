import { SaveToJSON } from './Function/ServiceFunction/Save';
import { createVariable, createUniqueName } from './Function/ServiceFunction/DataFunction';
import { NodeManager } from './Function/ServiceFunction/NodeManager';
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
	NodeManager,
	StyleManager,
	getRESTManager,
	Context,
	NavigationContext,
};
