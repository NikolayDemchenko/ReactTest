import React, { useState, useEffect } from 'react';
import ErrorBoundry from './ErrorBoundry';
import { page as testPage } from './Components/View/Pages/CreateApp';
import MainMenu from './Components/Control/MainMenu';
import { Context } from './AppFunction';
import Editor from './Components/Control/Editor';
import getPageREST from './Function/ServiceFunction/REST/PageREST';
const App = () => {
	// Рабочий
	// const [state, setState] = useState({});
	// Тестовый
	const [state, setState] = useState({ page: testPage });

	console.log('state :>> ', state);

	const PageREST = getPageREST(setState);


	return (
		<ErrorBoundry>
			<Context.Provider value={{ PageREST, state, setState }}>
				<MainMenu />
				{state.page && <Editor />}
			</Context.Provider>
		</ErrorBoundry>
	);
};

export default App;
