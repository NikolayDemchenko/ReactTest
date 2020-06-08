import React, { useState, useEffect } from "react";
import { newDiv } from "../../Tag/Classes";
import StylePanel from "./StylePanel/StylePanel";
import Icon from "react-icons-kit";
import { plus } from "react-icons-kit/icomoon/plus";
import { Link } from "react-scroll";
// import { cross } from "react-icons-kit/icomoon/cross";
import { v4 as uuidv4 } from "uuid";
import jss from "jss";
import preset from "jss-preset-default";
import Select from "../ModalWindows/Select";
import { htmlTags } from "../../Class/HtmlCss";
// import download from './download.json'
function VerticalPanel(props) {
  //    console.log(
  //     "%cVerticalPanel-App",
  //     'color: green');
  // console.log("props :>> ", props);
  // console.log("uuidv4", uuidv4());
  // console.log("download.json", download);
  const { preview, setPreview } = props;
  const [tag, _setTag] = useState(preview);
  // console.log('tag.style :>> ', tag.style);
  const setTag = (tag, chain) => {
    // console.log(`setTag-VerticalPanel ${chain}`);
    _setTag(tag);
  };
  // const tag=preview
  // const setTag=setPreview
  // const [stylePreview, setStylePreview] = useState(tag.style);

  useEffect(() => {
    setTag(preview);
    return () => {   
    };
  }, [preview]);

  // console.log("stylePreview :>> ", stylePreview);
  // const tag=preview
  // const setTag = setPreview
  // const clickElementById = (id) => document.getElementById(id).click();

  // const setPanel = () => {
  //   console.log("preview.style", preview.style);
  //   setSettings({ preview, setPreview });
  // };

  // Получает tag
  const setTagType = ({ value: type }) => {
    setPreview({ ...tag, type });
    setTag({ ...tag, type });
  };

  const addChildren = () => {
    // console.log("tag", tag);
    // preview.childrens = preview.childrens ? preview.childrens : [];
    // preview.childrens.push(JSON.parse(JSON.stringify(newDiv)));
    // setPanel({ ...preview });
    // clickElementById(preview.id);
  };

  const style = {
    flexWrap: "wrap",
    maxHeight: "95vh",
    // overflowY: "auto",
    minWidth: "280px",
    maxWidth: "280px",
    // fontSize:"16px",
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
  // console.log('tag', tag)
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
        <Select
          defaultItem={tag.type}
          setItem={setTagType}
          listItems={htmlTags}
        />
        <div
          style={{
            display: "flex",
            marginLeft: "auto",
          }}
        >
          <div
            title={"Добавить элемент"}
            style={{
              marginLeft: "auto",
              cursor: "pointer",
              width: "16px",
              margin: "0px 2px ",
              // border: "1px solid #fff",
            }}
            onClick={(e) => {
              e.stopPropagation();
              addChildren();
            }}
          >
            <Icon size={"100%"} icon={plus} />
          </div>
        </div>
      </div>
      <StylePanel
        {...props}
        tag={tag}
        setTag={setTag}
        // setStyleFragment={setStyleFragment}
      />
      <div style={{ paddingBottom: "4em" }} />
    </div>
  );
}

export default VerticalPanel;
