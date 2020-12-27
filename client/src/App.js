import React, { useState } from "react";
import ErrorBoundry from "./ErrorBoundry";
import Page from "./Components/View/Pages/Page";
import { page as _page } from "./Components/View/Pages/CreateApp";
import { Portal } from "react-portal";
import AttributesPanel from "./Components/Control/AttributesPanel/AttributesPanel";
import NavigationPanel from "./Components/Control/NavigationPanel/NavigationPanel";
import { TagCRUD, GetRESTManager, Context } from "./AppFunction";

const App = () => {
  // const [settings, setSettings] = useState(JSON.parse(sessionStorage.getItem("settings")));
  const [settings, _setSettings] = useState();
  const [page, _setPage] = useState(_page);
  console.log("settings :>> ", settings);
  const setPage = (page) => {
    // console.log("page :>> ", page);
    _setPage(page);
    console.log("setPage");
  };
  const setSettings = (settings) => {
    _setSettings(settings);
    console.log("setSettings");
  };
  // console.log('settings :>> ', settings);
  // settings&&sessionStorage.setItem('settings', JSON.stringify(settings))

  // page&&sessionStorage.setItem('page', JSON.stringify(page))

  // console.log('JSON.parse(sessionStorage.getItem("page")) :>> ', JSON.parse(sessionStorage.getItem("page")));

  // JSON.parse(localStorage.getItem("settings"))
  // const savedSettings= JSON.parse(localStorage.getItem("settings"))
  // savedSettings&&setSettings(savedSettings)

  // console.log("page", page);

  // console.log(
  //   "localStorage.getItem('settings') :>> ",
  //   JSON.parse(localStorage.getItem("settings"))
  // );
  const { getTagTree, createTag, removeTag, updateTag } = TagCRUD(
    page,
    setPage,
    setSettings
  );
  const tagTree = getTagTree(page.tags, null);
  const RESTManager = GetRESTManager(page, setPage, setSettings);

  // getApps();
  const onClick =
    settings && settings.assignStyleId
      ? (tag) => updateTag(tag.id, "styleId", settings.assignStyleId)
      : (tag) => setSettings((settings) => ({ ...settings, tag }));

  return (
    <ErrorBoundry>
      <Context.Provider
        value={{
          tagTree,
          createTag,
          removeTag,
          updateTag,
          RESTManager,
          page,
          setPage,
          settings,
          setSettings,
        }}
      >
        <NavigationPanel />
        {settings && settings.tag && (
          <Portal>
            <AttributesPanel />
          </Portal>
        )}
      </Context.Provider>
      <Page
        {...{
          bodyStyle: page.bodyStyle,
          tagTree,
          selectedId: settings && settings.tag && settings.tag.id,
          onClick,
        }}
      />
    </ErrorBoundry>
  );
};
// function areEqual(prevProps, nextProps) {
//   return prevProps === nextProps ? true : false;
// }
// export default React.memo(App, areEqual);
export default App;
