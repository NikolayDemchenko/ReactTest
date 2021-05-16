import React, {
  FC,
  useState,
} from 'react';

import PageEditor from './Components/Control/Editor';
import MainMenu from './Components/Control/MainMenu';
import { page as testPage } from './Components/View/Pages/CreateApp';
import ErrorBoundry from './ErrorBoundry';
import getPageREST from './Function/ServiceFunction/REST/PageREST';
import { TPage } from './Types/BaseTypes';
import {
  baseProp,
  getDataTest,
} from './Types/Structure/NewStructure/Interfaces';

const App: FC = () => {
	// Рабочий
	// const [state, setState] = useState({});
	// Тестовый
	console.log('App :>> ');
	// const [state, setState] = useState({ page: testPage });
	const [page, setPage] = useState<TPage>(testPage);
	const PageREST = getPageREST(setPage);
	getDataTest()

	return (
		<ErrorBoundry>
			<MainMenu {...{ page, PageREST }} />
			{page && new PageEditor(page, setPage).Component}
			{/* {JSON.stringify(nodes)} */}
			{/* <Viev /> */}
			{/* {baseObject}  */}
			{/* {component} */}	
			{baseProp}	
		</ErrorBoundry>
	);
};

export default App;


