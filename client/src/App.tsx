import React, { FC, ReactElement, useState } from 'react';
import ErrorBoundry from './ErrorBoundry';
import { page as testPage } from './Components/View/Pages/CreateApp';
import MainMenu from './Components/Control/MainMenu';
import { Context } from './AppFunction';
import Editor from './Components/Control/Editor';
import getPageREST from './Function/ServiceFunction/REST/PageREST';
import { IPage, IAppContext } from './Types/BaseTypes';

const App: FC = () => {
	// Рабочий
	// const [state, setState] = useState({});
	// Тестовый
	const [state, setState] = useState({ page: testPage });
	const [page, setPage] = useState<IPage>(testPage);

	console.log('page :>> ', page);
	const PageREST = getPageREST(setState);
	
	return (
		<ErrorBoundry>
			<Context.Provider value={{ PageREST, page, setPage }}>
				<MainMenu />
				{page && <Editor />}
			</Context.Provider>
		</ErrorBoundry>
	);
};

export default App;
