import React from "react";
import TagChildrens from "./TagChildrens";
import jss from "jss";
import preset from "jss-preset-default";
export default function Tag(props) {
  // console.log('childrens', tag.childrens)
  const { tag, setTag, setPreview, setControlPanel } = props;
  let { style } = tag.tagProps;

  jss.setup(preset());
  const { classes } = jss
    .createStyleSheet({
      style,
    })
    .attach();
  const setPanel = () => {
    if (!tag.selected) {
      setControlPanel({ tag: { ...tag, selected: true }, setTag, setPreview });
      console.log("Передача данных в панель управления", new Date(), {
        ...tag,
        selected: true,
      });
    }
  };

  return (
    <>
      <tag.tagType
        // tabIndex="0"
        className={classes.style}
        onClick={(event) => {
          event.stopPropagation();
          console.log("Клик");
          // Должна быть вызвана функция очищения предыдущего компонента от интерфейсных полей таких как "selected"
          setPanel();
        }}
      >
        <TagChildrens {...props}/>
      </tag.tagType>
      {/* <div style={{ height: "300px", width: "100%", background: "#457" }}></div> */}
    </>
  );
}
