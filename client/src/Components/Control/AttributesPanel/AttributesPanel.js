import React, { useState, useEffect } from "react";
import StylePanel from "./StylePanel/StylePanel";
import { Link } from "react-scroll";
import log from "../../../Log";
import jss from "jss";
import preset from "jss-preset-default";
import SelectPanel from "../ModalWindows/SelectPanel/SelectPanel";
import { htmlTags } from "../../Class/HtmlCss";
import BackSettings from "./BackSettings";
function AttributesPanel(props) {
  //    console.log(
  //     "%cVerticalPanel-App",
  //     'color: green');
  // console.log("props :>> ", props);

  const {
    changeTag,
    tag,
    // addStyle,
    panelStyle,
    setPreview,
    assignableStyle,
    setSettings,
    styleName,

    setStyleView,
    
    styles,
    page,
    setPage,
  } = props;
  // Назначает тип тега
  const setTagType = (type) => {
    console.log("setTagType", type);
    changeTag(props.tag, "type", type);
  };
  const style = {
    flexWrap: "wrap",
    maxHeight: "95vh",
    minWidth: "280px",
    maxWidth: "280px",
    position: "fixed",
    top: 0,
    right: 0,
    zIndex: 999,
    backgroundColor: "#456c",
    color: "rgba(140, 200, 255, 0.8)",
    boxShadow: "2px 10px 5px 2px #00000055",
    "&::-webkit-scrollbar": { width: "4px" },
    "&::-webkit-scrollbar-thumb": { backgroundColor: "#567" },
  };
  jss.setup(preset());
  const { classes } = jss
    .createStyleSheet({
      style,
    })
    .attach();

  return (
    <div className={classes.style}>
      <BackSettings {...props} />
      <div style={{ cursor: "default", display: "flex" }}>
        <Link
          activeClass="active"
          to={tag.id}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <div
            title={tag.id}
            style={{
              display: "inline-flex",
              height: "1.5em",
              padding: "0px 0.5em",
              overflow: "hidden",
            }}
          >
            tag.id: {tag.id}
          </div>
        </Link>
        <div
          style={{
            padding: "0px 0.5em",
          }}
        >
          type:
        </div>
        <SelectPanel
          selected={tag.type}
          items={htmlTags}
          setItem={setTagType}
        />
        <div
          style={{
            display: "flex",
            marginLeft: "auto",
          }}
        ></div>
      </div>
      {/* <div>
        {props.component.styles.map((style, index) => (
          <div key={index}>{style.name}</div>
        ))}
      </div> */}
      <Link
        activeClass="active"
        to={tag.id}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <StylePanel
          {...{
            // addStyle,
            panelStyle,
            setPreview,
            assignableStyle,
            setSettings,
            styleName,
            changeTag,
            tag,

            setStyleView,
        
            styles,
            page,
            setPage,
          }}
        />
      </Link>
      <div style={{ paddingBottom: "4em" }} />
    </div>
  );
}

function areEqual(prevProps, nextProps) {
  console.log(
    "prevProps.changeTag===nextProps.changeTag",
    prevProps.changeTag === nextProps.changeTag
  );
  console.log("prevProps.tag===nextProps.tag", prevProps.tag === nextProps.tag);

  
  console.log(
    "prevProps.setPreview===nextProps.setPreview",
    prevProps.setPreview === nextProps.setPreview
  );
  console.log(
    "prevProps.assignableStyle===nextProps.assignableStyle",
    prevProps.assignableStyle === nextProps.assignableStyle
  );
  console.log(
    "prevProps.setSettings===nextProps.setSettings",
    prevProps.setSettings === nextProps.setSettings
  );
  console.log(
    "prevProps.styleName===nextProps.styleName",
    prevProps.styleName === nextProps.styleName
  );

  console.log(
    "prevProps.styles===nextProps.styles",
    prevProps.styles === nextProps.styles
  );
  console.log(
    "prevProps.setStyleView===nextProps.setStyleView",
    prevProps.setStyleView === nextProps.setStyleView
  );

  console.log("prevProps===nextProps", prevProps === nextProps);

  return prevProps === nextProps;

}

// export default log(AttributesPanel);
export default React.memo(log(AttributesPanel));
// export default React.memo(log(AttributesPanel), areEqual);
