import React, { FC, useState } from 'react';

import PageEditor from './Components/Control/Editor';
import MainMenu from './Components/Control/MainMenu';
import { page as testPage } from './Components/View/Pages/CreateApp';
import ErrorBoundry from './ErrorBoundry';
import getPageREST from './Function/ServiceFunction/REST/PageREST';
import { TPage } from './Types/BaseTypes';
import { TestView , ObjToObjArray} from './Types/TreeView/TestView';

const App: FC = () => {
	// Рабочий
	// const [state, setState] = useState({});
	// Тестовый
	console.log('App :>> ');
	const [state, setState] = useState({ page: testPage });
	const [page, setPage] = useState<TPage>(testPage);

	// const Editor=

	// console.log('page :>> ', page);
	const PageREST = getPageREST(setState);

	return (
		<ErrorBoundry>
			<MainMenu {...{ page, PageREST }} />
			{page && new PageEditor(page, setPage).Component}
			<TestView {...{dataList:ObjToObjArray(page.styles[0])}}/>
			<TestView {...{dataList:page.nodes.map(node=>({node}))}}/>
		</ErrorBoundry>
	);
};

export default App;
