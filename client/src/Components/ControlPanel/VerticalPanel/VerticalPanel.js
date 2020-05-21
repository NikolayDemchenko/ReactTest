import React from "react";
import { newDiv } from "../../Tag/Classes";
import StylePanel from "./StylePanel/StylePanel";
import Icon from "react-icons-kit";
import { plus } from "react-icons-kit/icomoon/plus";
// import { cross } from "react-icons-kit/icomoon/cross";
import jss from "jss";
import preset from "jss-preset-default";
import Select from "../ModalWindows/Select";
import { htmlTags } from "../../Class/HtmlCss";
function VerticalPanel(props) {
   // console.log(
  //   "%cVerticalPanel",
  //   `background-color: ${props.tag.style.backgroundColor}`
  // );

  const { tag, setTag, setPreview } = props;


  const setTagType = ({ value: type }) => {
    setTag({ ...tag, type });
    setPreview({ ...tag, type });
    console.log("tag.type", type);
  };

  const addChildren = () => {
    console.log("tag", tag);
    tag.childrens=tag.childrens?tag.childrens:[]
    tag.childrens.push(JSON.parse(JSON.stringify(newDiv)));
    setTag({ ...tag });
  };

  const style = {
    flexWrap: "wrap",
    minWidth: "280px",
    maxWidth: "280px",
    // fontSize:"16px",
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
      <div style={{ display: "flex" }}>
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
      <StylePanel {...props} />
      <div style={{ paddingBottom: "4em" }} />
    </div>
  );
}
function areEqual(prevProps, nextProps) {
  // prevProps.tag === nextProps.tag ?  console.log('Равно') : console.log('Не равно');
  return prevProps.tag === nextProps.tag ? true : false;
}
export default React.memo(VerticalPanel, areEqual);
// export default VerticalPanel;
