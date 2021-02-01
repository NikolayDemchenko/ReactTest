import React, { useState } from 'react';
import ErrorBoundry from './ErrorBoundry';
import { page as _page } from './Components/View/Pages/CreateApp';
import NavigationPanel from './Components/Control/NavigationPanel/NavigationPanel';
import { GetRESTManager, NavigationContext } from './AppFunction';
import Editor from './Components/Control/Editor';

const App = () => {
	// Рабочий
	// const [state, setState] = useState({});
	// Тестовый
	const [state, setState] = useState({ page: _page });
	console.log('state :>> ', state);

	const RESTManager = GetRESTManager(setState);

	return (
		<ErrorBoundry>
			<NavigationContext.Provider
				value={{
					RESTManager,
					state,
					setState,
				}}
			>
				<NavigationPanel />
			</NavigationContext.Provider>
			{state.page && <Editor {...{ RESTManager, setState, state }} />}
		</ErrorBoundry>
	);
};

export default App;
