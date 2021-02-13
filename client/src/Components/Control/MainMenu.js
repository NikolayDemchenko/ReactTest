import React, { useState, useContext, useEffect } from "react";
import { TagList } from "./NavigationPanel/Tags/TagList";
import AppList from "./NavigationPanel/Apps/AppList";
import PageList from "./NavigationPanel/Pages/PageList";
import PopupInputsForm from "./Inputs/ModalInput/PopupInput/PopupInputsForm";
import SelectPanel from "./Inputs/ModalInput/SelectPanel/SelectPanel";
import jss from "jss";
import { fileTextO } from "react-icons-kit/fa/fileTextO";
import { save } from "react-icons-kit/fa/save";
import { map } from "react-icons-kit/icomoon/map";
import { folderOpen } from "react-icons-kit/icomoon/folderOpen";
import { navicon } from "react-icons-kit/fa/navicon";
import Icon from "react-icons-kit";
import preset from "jss-preset-default";
import SavePage from "./NavigationPanel/Pages/SavePage";
import { NavigationContext } from "../../AppFunction";

import { log, funcLog } from "../../Log";
import { buttonStyle } from "./Styles/BtnStyle";
import NavigationPanel from "./NavigationPanel/NavigationPanel";
function MainMenu() {
  const {
    state,
    setState,
    RESTManager: { createPage, updatePage, getPagesByAppName, getApps },
  } = useContext(NavigationContext);
  const { page } = state;
  // console.log('props', props)
  // const style = {
  //   // flexWrap: "wrap",
  //   minWidth: "280px",
  //   maxWidth: "280px",
  //   maxHeight: "95vh",
  //   overflowY: "auto",
  //   // fontSize:"16px",
  //   // position: 'fixed',
  //   // top: '20px',
  //   // left: 0,
  //   // zIndex: 999,
  //   // backgroundColor: 'rgba(30,40,57,.6)',
  //   color: "rgba(140, 200, 255, 0.8)",
  //   boxShadow: "2px 10px 5px 2px #00000055",
  //   "&::-webkit-scrollbar": { width: "20px" },
  //   "&::-webkit-scrollbar-thumb": { backgroundColor: "#567" },
  // };
  // jss.setup(preset());
  // const { classes } = jss
  //   .createStyleSheet({
  //     style,
  //   })
  //   .attach();

  const [show, setShow] = useState(false);
  const [apps, setApps] = useState();
  useEffect(() => {
    getApps().then((apps) => setApps(apps));
    return () => {};
  }, []);

  console.log("apps", apps);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        zIndex: 999,
        backgroundColor: "rgba(30,40,57,.6)",
        // backgroundColor: '#456c',
        color: "rgba(140, 200, 255, 0.8)",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        // padding: '0 10px',
      }}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "rgba(30,40,57,.8)",
          marginBottom: "2px",
          paddingBottom: "2px",
        }}
      >
        <SelectPanel
          items={apps}
          selected={""}
          setItem={(appName) =>
            getPagesByAppName(appName).then(({ pageList, page }) =>
              setState({ pageList, page })
            )
          }
          button={
            <div title={"Open"} className={buttonStyle}>
              <Icon size={"100%"} icon={folderOpen} />
            </div>
          }
        />

        <PopupInputsForm
          setItem={(data) =>
            createPage({
              ...data,
              nodes: [],
              styles: [],
              bodyStyle: { background: "inherit" },
            })
          }
          inputs={[
            { title: "app name", name: "appName" },
            { title: "domain", name: "domain" },
            { title: "page name", name: "name" },
          ]}
          requredNames={["domain", "name", "appName"]}
        >
          <div title={"Create new application"} className={buttonStyle}>
            <Icon size={"100%"} icon={fileTextO} />
          </div>
        </PopupInputsForm>
        {page && (
          <div
            className={buttonStyle}
            style={{ color: show && "#ffa" }}
            onClick={(e) => {
              e.stopPropagation();
              console.log("setShowPanel");
              setShow(!show);
            }}
          >
            <Icon size={"100%"} icon={map} />       
          </div>
        )}
        {page && (
          <SavePage
            page={page}
            savePage={updatePage}
            createPage={createPage}
            pageId={page._id}
          >
            <div title={"Save"} className={buttonStyle}>
              <Icon size={"100%"} icon={save} />
            </div>
          </SavePage>
        )}
      </div>
      {show && (
        <NavigationPanel/>   
      )}
    </div>
  );
}
export default log(MainMenu);
// export default NavigationPanel;
