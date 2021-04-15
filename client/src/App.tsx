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

const App: FC = () => {
	// Рабочий
	// const [state, setState] = useState({});
	// Тестовый
	console.log('App :>> ');
	// const [state, setState] = useState({ page: testPage });
	const [page, setPage] = useState<TPage>(testPage);

	// console.log(`${IsTypeOf(["Васян","Писюнян"])} нахуй!`);
	// IsTypeOf("Это строка?")
	// IsTypeOf(57)
	// IsTypeOf(true)
	// IsTypeOf({name:"Васян"})
	// IsTypeOf(["Васян","Писюнян"])

	// const Editor=

	// console.log('page :>> ', page);
	const PageREST = getPageREST(setPage);

	return (
		<ErrorBoundry>
			<MainMenu {...{ page, PageREST }} />
			{page && new PageEditor(page, setPage).Component}			
			{/* <TestView {...{list:PageNodesToTreeNodes(page.nodes)}}/> */}
		</ErrorBoundry>
	);
};

export default App;
