import React, { useState } from "react";
import ErrorBoundry from "./ErrorBoundry";
import Page from "./Components/View/Pages/Page";
import { page as _page } from "./Components/View/Pages/CreateApp";
import { Portal } from "react-portal";
import AttributesPanel from "./Components/Control/AttributesPanel/AttributesPanel";
import jss from "jss";
import preset from "jss-preset-default";
import NavigationPanel from "./Components/Control/NavigationPanel/NavigationPanel";
import { TagManager, PageManager } from "./AppFunction";

const App = () => {

  const [settings, setSettings] = useState(JSON.parse(sessionStorage.getItem("settings")));
  const [page, setPage] = useState(_page);

  settings&&sessionStorage.setItem('settings', JSON.stringify(settings))

  // page&&sessionStorage.setItem('page', JSON.stringify(page))

  console.log('JSON.parse(sessionStorage.getItem("page")) :>> ', JSON.parse(sessionStorage.getItem("page")));

  // JSON.parse(localStorage.getItem("settings"))
  // const savedSettings= JSON.parse(localStorage.getItem("settings"))
  // savedSettings&&setSettings(savedSettings)

  // console.log("page", page);
  
  // console.log(
  //   "localStorage.getItem('settings') :>> ",
  //   JSON.parse(localStorage.getItem("settings"))
  // );
  const { getTagStructure, createTag, removeTag, updateTag } = TagManager(
    setPage,
    setSettings
  );
  const tags = getTagStructure(page.tags, null);
  const { saveNewPage, savePage } = PageManager(page, setPage);

  const clickedId = settings && settings.clickedId;
  const setClickedId = (clickedId) => {
    setSettings((state) => ({
      ...state,
      clickedId,
    }));
  };

  jss.setup(preset());
  const myStyles = {};
  page.styles.forEach(({ id, data }) => {
    myStyles[id] = data;
  });
  const { classes } = jss.createStyleSheet({ ...myStyles }).attach();

  const tag =settings&& page.tags.find(({ id }) => id === settings.clickedId);
  return (
    <ErrorBoundry>
      <NavigationPanel
        {...{ tags, createTag, removeTag, savePage, saveNewPage }}
        pageId={page._id}
        selectedId={settings && settings.clickedId}
      />
      {tag && (
        <Portal>
          <AttributesPanel
            {...{
              updateTag,
              setSettings,
              settings,
              page,
              tag,
              setPage,
            }}
          />
        </Portal>
      )}
      <Page {...{ page, tags, classes, clickedId, setClickedId }} />
    </ErrorBoundry>
  );
};
// function areEqual(prevProps, nextProps) {
//   return prevProps === nextProps ? true : false;
// }
// export default React.memo(App, areEqual);
export default App;
