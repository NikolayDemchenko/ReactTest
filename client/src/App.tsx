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
  HierarchycalEntitiesToJs,
} from './Types/TreeView/Converters/HierarchicalEntities';
import {
  JsView,
  TJs,
} from './Types/TreeView/JsView';

const App: FC = () => {
	// Рабочий
	// const [state, setState] = useState({});
	// Тестовый
	console.log('App :>> ');
	// const [state, setState] = useState({ page: testPage });
	const [page, setPage] = useState<TPage>(testPage);
const nodes=HierarchycalEntitiesToJs(page.nodes) as unknown
	const TreeViev = new JsView(nodes as TJs).component;
	const PageREST = getPageREST(setPage);

	return (
		<ErrorBoundry>
			<MainMenu {...{ page, PageREST }} />
			{page && new PageEditor(page, setPage).Component}
			{JSON.stringify(nodes)}
			<TreeViev />
		</ErrorBoundry>
	);
};

export default App;