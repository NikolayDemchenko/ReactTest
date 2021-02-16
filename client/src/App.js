import React, { useState } from "react";
import ErrorBoundry from "./ErrorBoundry";
import { page as _page } from "./Components/View/Pages/CreateApp";
import MainMenu from "./Components/Control/MainMenu";
import { GetRESTManager, Context } from "./AppFunction";
import Editor from "./Components/Control/Editor";

const App = () => {
  // Рабочий
  // const [state, setState] = useState({});
  // Тестовый
  const [state, setState] = useState({ page: _page });
  console.log("state :>> ", state);

  const RESTManager = GetRESTManager(setState);

  return (
    <ErrorBoundry>
      <Context.Provider
        value={{
          RESTManager,
          state,
          setState,
        }}
      >
        <MainMenu />
        {state.page && <Editor />}
      </Context.Provider>
    </ErrorBoundry>
  );
};

export default App;
