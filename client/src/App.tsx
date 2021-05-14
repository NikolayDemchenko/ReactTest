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
import { component } from './Types/Structure/Container';

const App: FC = () => {
	// Рабочий
	// const [state, setState] = useState({});
	// Тестовый
	console.log('App :>> ');
	// const [state, setState] = useState({ page: testPage });
	const [page, setPage] = useState<TPage>(testPage);
// const nodes=HierarchycalEntitiesToJs(page.nodes) as unknown
	// const Viev = new JsView(nodes as TJs).component;
	const PageREST = getPageREST(setPage);

	return (
		<ErrorBoundry>
			<MainMenu {...{ page, PageREST }} />
			{page && new PageEditor(page, setPage).Component}
			{/* {JSON.stringify(nodes)} */}
			{/* <Viev /> */}
			{/* {baseObject}  */}
			{component}
		</ErrorBoundry>
	);
};

export default App;


// const render = (value: IElement) => console.table(value);

// const element = new MyElement(createSimpleElement(),render);
// // element.consoleThis();
// element.setTag("p");
// element.setChildren([...element.children,"Нет! Теперь я текст в элементе","И я тоже!",createSimpleElement()]);
// element.setChildren([...element.children,"Хер вам всем! Теперь я текст в элементе",element]);
// element.removeChildren(["Хер вам всем! Теперь я текст в элементе"]);