import React, { useState, useEffect } from "react";
import log from "../../../Log";
// import { v4 as uuidv4 } from "uuid";
import shortid from "shortid";
import Tags from "./Tag/Tags";
// import { page as _page } from "./CreateApp";
import NavigationPanel from "../../Control/NavigationPanel/NavigationPanel";
// import { SaveToJSON } from "../../../../AppFunction";
import jss from "jss";
import preset from "jss-preset-default";
import axios from "axios";

// import FileSaver from "file-saver";
function Page({page, setPage, settings, setSettings}) {
  // console.log("page-App");
  // const [page, setPage] = useState(JSON.parse(JSON.stringify(_page)));

  const back = jss.createStyleSheet({ body: page.bodyStyle }).attach();
  document.querySelector("body").classList.add(`${back.classes.body}`);

  const getTagStructure = (tags, parentId, styles) => {
    return tags.filter((tag) => {
      if (tag.parentId === parentId) {
        tag.childrens = getTagStructure(tags, tag.id, styles);
        return tag;
      } else {
        return null;
      }
    });
  };

  

  // console.log("settings :>> ", settings);

  // console.log("page.tags :>> ", page.tags);

  const tags = getTagStructure([...page.tags], null, [...page.styles]);

  jss.setup(preset());
  const myStyles = {};
  page.styles.forEach(({ id, data }) => {
    myStyles[id] = data;
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
          changeTag,             
          classes,
          page,
          setPage,
        }}
      />
    </div>
  );
}
export default log(Page);
