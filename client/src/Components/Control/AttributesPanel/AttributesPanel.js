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
    updateTag,
    setSettings,
    settings: { tag, assignStyleId },
    page,
    setPage,
  } = props;

  // const tag = page.tags.find(({ id }) => id === clickedId);

  const tagStyle = page.styles.find(({ id }) => id === tag.styleId);

  // console.log("tagStyle :>> ", tagStyle);
  // console.log("assigStyleId", assignStyleId);

  useEffect(() => {
    console.log("useEffect in");
    assignStyleId &&
      assignStyleId !== tag.styleId &&
      updateTag(tag.id, "styleId", assignStyleId);
    return () => {
      console.log("useEffect out");

      // console.log("window.location.reload()");
      // window.location.reload()
    };
  }, [tag]);

  // const [styleView, setStyleView] = useState();

  // const setPreview = (style) => {
  //   document.getElementById(tag.id).className = jss
  //     .createStyleSheet({ className: styleView.styleViewFilter(style) })
  //     .attach().classes.className;
  // };


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
          setItem={(type) => updateTag(tag.id, "type", type)}
        />
        <div
          style={{
            display: "flex",
            marginLeft: "auto",
          }}
        ></div>
      </div>
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
            tagStyle,
            panelStyle: tagStyle.data,
            // setPreview,
            assignStyleId,
            setSettings,
            updateTag,
            tag,
            // setStyleView,
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
  return prevProps === nextProps;
}

// export default log(AttributesPanel);
export default React.memo(log(AttributesPanel));
// export default React.memo(log(AttributesPanel), areEqual);
