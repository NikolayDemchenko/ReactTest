import React, { useContext } from "react";
import StylePanel from "./StylePanel/StylePanel";
import { Link } from "react-scroll";
import { log, funcLog } from "../../../Log";
import jss from "jss";
import preset from "jss-preset-default";
import SelectPanel from "../Inputs/ModalInput/SelectPanel/SelectPanel";
import { htmlTags } from "../../Class/HtmlCss";
import BackSettings from "./BackSettings";
import { Context } from "../../../AppFunction";

function AttributesPanel(props) {
  //    console.log(
  //     "%cVerticalPanel-App",
  //     'color: green');
  // console.log("props :>> ", props);

  const { updateTag, node } = useContext(Context);

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
    <div>
      <div className={classes.style}>
        <BackSettings {...props} />
        <div style={{ cursor: "default", display: "flex" }}>
          <Link
            activeClass="active"
            to={node.id}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div
              title={node.id}
              style={{
                display: "inline-flex",
                height: "1.5em",
                padding: "0px 0.5em",
                overflow: "hidden",
              }}
            >
              node.id: {node.id}
            </div>
          </Link>
          <div
            style={{
              padding: "0px 0.5em",
            }}
          >
            tag:
          </div>
          <SelectPanel
            selected={node.tag}
            items={htmlTags}
            setItem={(tag) => updateTag(node.id, "tag", tag)}
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
          to={node.id}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <StylePanel />
        </Link>
        <div style={{ paddingBottom: "4em" }} />
      </div>
    </div>
  );
}

// function areEqual(prevProps, nextProps) {
//   return prevProps === nextProps;
// }

export default log(AttributesPanel);
// export default React.memo(log(AttributesPanel));
// export default React.memo(log(AttributesPanel), areEqual);
