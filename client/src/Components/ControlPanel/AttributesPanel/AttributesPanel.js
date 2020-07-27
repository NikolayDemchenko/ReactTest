import React, { useState, useEffect } from "react";
import StylePanel from "./StylePanel/StylePanel";
import { Link } from "react-scroll";
// import { v4 as uuidv4 } from "uuid";
import jss from "jss";
import preset from "jss-preset-default";
import SelectPanel from "../SelectPanel/SelectPanel";
import { htmlTags } from "../../Class/HtmlCss";

function AttributesPanel(props) {
  //    console.log(
  //     "%cVerticalPanel-App",
  //     'color: green');
  // console.log("props :>> ", props);

  const { preview, updateStyle,changeTag } = props;
  const [tag, setTag] = useState(preview);

  
  useEffect(() => {
    setTag(preview);
    // updateStyle(tag.style, tag.styleId);
    return () => {
    };
  }, [preview]);

  // Получает tag
  const setTagType = ( type ) => {
    changeTag(tag,"type",type)
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
            id: {tag.id}
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
          selectedItem={tag.type}
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
      <StylePanel {...props} tag={tag} setTag={setTag} />
      <div style={{ paddingBottom: "4em" }} />
    </div>
  );
}

export default AttributesPanel;
