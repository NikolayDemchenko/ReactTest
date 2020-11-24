import React, { useState } from "react";
import ErrorBoundry from "./ErrorBoundry";
import Page from "./Components/View/Pages/Page";
import { page as _page } from "./Components/View/Pages/CreateApp";
import { Portal } from "react-portal";
import AttributesPanel from "./Components/Control/AttributesPanel/AttributesPanel";
import jss from "jss";
import preset from "jss-preset-default";
import NavigationPanel from "./Components/Control/NavigationPanel/NavigationPanel";
import { TagManager, GetPageManager } from "./AppFunction";

const App = () => {
  // const [settings, setSettings] = useState(JSON.parse(sessionStorage.getItem("settings")));
  const [settings, setSettings] = useState();
  const [page, _setPage] = useState(_page);
  // console.log("page :>> ", page);
  const setPage = (page) => {
    console.log("page :>> ", page);
    _setPage(page);
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
  const { getTagTree, createTag, removeTag, updateTag } = TagManager(
    setPage,
    setSettings
  );
  const tagTree = getTagTree(page.tags, null);
  const pageManager = GetPageManager(page, setPage);
  // const { getApps, createApp, createPage, updatePage } = pageManager;
  // getApps();
  const onClick =
    settings && settings.assignStyleId
      ? (tag) => updateTag(tag.id, "styleId", settings.assignStyleId)
      : (tag) => setSettings((settings) => ({ ...settings, tag }));

  // const clickedId = settings && settings.clickedId;
  // const setClickedId = (clickedId) => {
  //   setSettings((state) => ({
  //     ...state,
  //     clickedId,
  //   }));
  // };

  jss.setup(preset());
  const myStyles = {};
  page.styles.forEach(({ id, data }) => {
    myStyles[id] = data;
  });
  const { classes } = jss.createStyleSheet({ ...myStyles }).attach();

  // const tag =settings&& page.tags.find(({ id }) => id === settings.clickedId);
  // settings&& console.log('tag :>> ', tag);
  return (
    <ErrorBoundry>
      <NavigationPanel
        {...{
          tagTree,
          createTag,
          removeTag,
          pageManager,
          setPage,
          settings,
          setSettings,
        }}
        pageId={page._id}
        selectedId={settings && settings.tag && settings.tag.id}
      />
      {settings && settings.tag && (
        <Portal>
          <AttributesPanel
            {...{
              updateTag,
              setSettings,
              settings,
              page,
              setPage,
            }}
          />
        </Portal>
      )}
      <Page
        {...{
          bodyStyle: page.bodyStyle,
          tagTree,
          classes,
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
