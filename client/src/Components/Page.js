import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Tags from "./Tag/Tags";
import { getParentBranch } from "./Tag/Tag";
import { page as _page, createStyle } from "./Tag/Classes";
import NavigationPanel from "./ControlPanel/NavigationPanel/NavigationPanel";
import AttributesPanel from "./ControlPanel/AttributesPanel/AttributesPanel";
import { SaveToJSON } from "../AppFunction";
// import FileSaver from "file-saver";
export default function Page(props) {
  // console.log("Page-App");

  const getTagStructure = (tags, parentId, styles) => {
    const newTags = JSON.parse(JSON.stringify(tags));
    return newTags.filter((tag) => {
      if (tag.parentId === parentId) {
        tag.style = JSON.parse(
          JSON.stringify(styles.find((style) => style.id === tag.styleId).style)
        );
        tag.childrens = getTagStructure(newTags, tag.id, styles);
        return tag;
      } else {
        return null;
      }
    });
  };

  const [settings, setSettings] = useState();
  const [page, setPage] = useState(JSON.parse(JSON.stringify(_page)));
  // console.log("page.tags :>> ", page.tags);

  const tags = getTagStructure([...page.tags], null, [...page.styles]);
  // console.log("settings :>> ", settings);

  const addTag = (type, parent) => {
    const newTag = {
      id: uuidv4(),
      parentId: parent.id,
      type,
      index: parent.childrens.length,
      styleId: page.styles.find((style) => style.name === "newStyle").id,
      attributes: {},
      childrens: [],
    };
    setSettings({ ...settings, preview: parent });
    setPage({ ...page, tags: [...page.tags, newTag] });
  };

  const removeTag = (tagId) => {
    const newTags = [...[...page.tags].filter((tag) => tag.id !== tagId)];

    console.log("newTags", newTags);
    setSettings();
    setPage({ ...page, tags: newTags });
  };

  const newStyle = (style, name, tag) => {
    const newStyle = createStyle(style, name);
    const changedTag = { ...tag, styleId: newStyle.id };
    const newTags = page.tags.map((tag) => {
      if (changedTag.id === tag.id) {
        return changedTag;
      } else {
        return tag;
      }
    });
    setSettings({ ...settings, preview: changedTag });
    setPage({ ...page, tags: newTags, styles: [...page.styles, newStyle] });
  };

  const changeTag = (tag, propName, propValue) => {
    const changedTag = { ...tag, [propName]: propValue };
    const newTags = page.tags.map((tag) => {
      if (changedTag.id === tag.id) {
        return changedTag;
      } else {
        return tag;
      }
    });
    setSettings({ ...settings, preview: changedTag });
    setPage({ ...page, tags: newTags });
  };

  const updateStyle = (style, styleId) => {
    // console.log("style :>> ", style);

    const styles = page.styles.map((st) => {
      if (st.id === styleId) {
        return { ...st, style };
      } else {
        return st;
      }
    });

    // Вот эту хуйню допилить это сборщик айдишек для рендера
    const tagsForRender = [
      page.tags.forEach((tag) => {
       if (tag.styleId === styleId) getParentBranch(page.tags, tag.id);
      }),
    ];
    console.log(
      "[...page.tags.map((tag) => tag.styleId === styleId)] :>> ",
      tagsForRender
    );
    setSettings({ ...settings, tagsForRender });
    setPage({ ...page, styles });
  };

  // settings&&console.log('settings.parentBranch :>> ', settings.parentBranch);
  // console.log("page.tags :>> ", page.tags);
  // console.log("tags :>> ", tags);
  // console.log("id :>> ",settings&& settings.preview.id);

  useEffect(() => {
    if (settings) {
      const element = document.getElementById(settings.preview.id);
      element && (element.style.outline = "1px dashed #5af");
    }
    return () => {
      if (settings) {
        const element = document.getElementById(settings.preview.id);
        element && (element.style.outline = "");
        // updateStyle(settings.preview.style,settings.preview.styleId)
      }
    };
  }, [settings]);

  return (
    <div>
      <NavigationPanel
        tags={tags}
        addTag={addTag}
        removeTag={removeTag}
        savePage={() => SaveToJSON(page)}
        selected={settings && settings.preview}
      />
      {settings && (
        <AttributesPanel
          {...{ ...settings, changeTag, newStyle, updateStyle }}
        />
      )}
      <Tags
        {...{ ...settings, setSettings, tags, page }}
        // edit={true}
      />
    </div>
  );
}
