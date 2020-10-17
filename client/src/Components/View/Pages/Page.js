import React, { useState, useEffect } from "react";
import log from "../../../Log";
// import { v4 as uuidv4 } from "uuid";
import shortid from "shortid";
import Tags from "./Tag/Tags";
import { page as _page } from "./CreateApp";
import { createStyle } from "../../../AppFunction";
import NavigationPanel from "../../Control/NavigationPanel/NavigationPanel";
// import { SaveToJSON } from "../../../../AppFunction";
import jss from "jss";
import preset from "jss-preset-default";
import axios from "axios";

// import FileSaver from "file-saver";
function Page(props) {
  // console.log("page-App");

  const getTagStructure = (tags, parentId, styles) => {
    const newTags = JSON.parse(JSON.stringify(tags));
    return newTags.filter((tag) => {
      if (tag.parentId === parentId) {
        tag.childrens = getTagStructure(newTags, tag.id, styles);
        return tag;
      } else {
        return null;
      }
    });
  };

  const [settings, setSettings] = useState();

  // console.log("settings :>> ", settings);

  const [page, setPage] = useState(JSON.parse(JSON.stringify(_page)));
  // console.log("page.tags :>> ", page.tags);

  const tags = getTagStructure([...page.tags], null, [...page.styles]);

  jss.setup(preset());
  const myStyles = {};
  page.styles.forEach(({ id, style }) => {
    myStyles[id] = style;
  });
  const { classes } = jss.createStyleSheet({ ...myStyles }).attach();

  const addTag = (type, parent) => {
    const newTag = {
      id: shortid.generate(),
      parentId: parent.id,
      type,
      index: parent.childrens.length,
      styleId: page.styles.find((style) => style.name === "newStyle").id,
      attributes: {},
      childrens: [],
    };

    setPage({ ...page, tags: [...page.tags, newTag] });
  };

  const removeTag = (tagId) => {
    const newTags = [...[...page.tags].filter((tag) => tag.id !== tagId)];

    console.log("newTags", newTags);
    setSettings();
    setPage({ ...page, tags: newTags });
  };

  const changeTag = (tag, propName, propValue) => {
    const changedTag = { ...tag, [propName]: propValue };
    // console.log('changedTag :>> ', changedTag);
    const tags = page.tags.map((tag) => {
      if (changedTag.id === tag.id) {
        return changedTag;
      } else {
        return tag;
      }
    });
    setPage({ ...page, tags });
    return changedTag;
  };

  const addStyle = (style, name, tag) => {
    const newStyle = createStyle(style, name);
    const changedTag = { ...tag, styleId: newStyle.id };
    const newTags = page.tags.map((tag) => {
      if (changedTag.id === tag.id) {
        return changedTag;
      } else {
        return tag;
      }
    });
    console.log("page", page);
    setPage({ tags: newTags, styles: [...page.styles, newStyle] });
    return changedTag;
  };

  const updateStyle = (styleId, propName, propValue) => { 
    console.log('updateStyle', propName)
    const styles = page.styles.map((st) => {
      if (st.id === styleId) {
        return { ...st, [propName]: propValue };
      } else {
        return st;
      }
    });
    setPage({ ...page, styles });
  };

  const saveNewPage = (name) => {
    name && name !== ""
      ? axios({
          method: "post",
          url: "http://localhost:8000/addpage",
          data: { page: JSON.stringify({ ...page, name }) },
        })
          .then((response) => {
            console.log(response.data);
            setPage({ ...response.data });
          })
          .catch(function (error) {
            console.log(error);
          })
      : alert("string empty!");
  };
  const savepage = () => {
    console.log("save");
    axios({
      method: "post",
      url: "http://localhost:8000/updatepage",
      data: { page: JSON.stringify(page) },
    })
      .then((response) => {
        console.log(response.data);
        setPage({ ...response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <NavigationPanel
        {...{ tags, addTag, removeTag, savepage, saveNewPage }}
        pageId={page._id}
        selectedId={settings && settings.selectedId}
      />
      <Tags
        {...{
          ...settings,
          setSettings,
          tags,
          page,
          changeTag,
          addStyle,
          updateStyle,
          classes,
        }}
      />
    </div>
  );
}
export default log(Page);
