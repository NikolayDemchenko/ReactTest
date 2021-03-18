import React, { useState } from 'react';
import ErrorBoundry from './ErrorBoundry';
import { page as testPage } from './Components/View/Pages/CreateApp';
import MainMenu from './Components/Control/MainMenu';
import { Context } from './AppFunction';
import Editor from './Components/Control/Editor';
import getPageREST from './Function/ServiceFunction/REST/PageREST';
import { Page, AppContext } from './Types/BaseTypes';

const App: React.FC = () => {
	// Рабочий
	// const [state, setState] = useState({});
	// Тестовый
	const [state, setState] = useState({ page: testPage });
	const [page, setPage] = useState<Page>(testPage);

	console.log('page :>> ', page);
	const PageREST = getPageREST(setState);

	return (
		<ErrorBoundry>
			<Context.Provider value={{ PageREST, page, setPage }}>
				<MainMenu />
				{page && <Editor {...{ PageREST, page, setPage }} />}
			</Context.Provider>
		</ErrorBoundry>
	);
};

export default App;
