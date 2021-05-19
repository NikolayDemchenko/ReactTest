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
  createdElement,
  ElementCreator,
} from './Types/Structure/NewStructure/Function/ElementCreator';
import { testElement } from './Types/Structure/NewStructure/Interfaces';

const App: FC = () => {
  // Рабочий
  // const [state, setState] = useState({});
  // Тестовый
  console.log("App :>> ");
  // const [state, setState] = useState({ page: testPage });
  const [page, setPage] = useState<TPage>(testPage);
  const PageREST = getPageREST(setPage);

  console.log(`array.getData()`, testElement.getData());
  console.log("testSwitcher :>> ", createdElement);
  return (
    <ErrorBoundry>
      <MainMenu {...{ page, PageREST }} />
      {page && new PageEditor(page, setPage).Component}
      {testElement.render()}
      {/* {JSON.stringify(testElement.getData())} */}
      <div>{ElementCreator(testElement.getData()).render()}</div>
    </ErrorBoundry>
  );
};
export default App;
