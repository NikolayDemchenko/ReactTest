import React, {
  FC,
  useState,
} from 'react';

import { page as testPage } from './Components/View/Pages/CreateApp';
import ErrorBoundry from './ErrorBoundry';
import getPageREST from './Function/ServiceFunction/REST/PageREST';
import { TPage } from './Types/BaseTypes';
import { Contacts } from './Types/EntityBase/Organization';

// import { MyComopnent } from './Types/NewAppStructure/NewComponents/Components';

const App: FC = () => {
  console.log("App :>> ");  
  const [page, setPage] = useState<TPage>(testPage);
  const PageREST = getPageREST(setPage);


  return (
    <ErrorBoundry>
      {/* <MainMenu {...{ page, PageREST }} /> */}
      {/* {page && new PageEditor(page, setPage).Component} */}
      {/* <PreviewComponent/> */}
      <Contacts/>
    </ErrorBoundry>
  );
};
export default App;
