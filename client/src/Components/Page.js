import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Tags from "./Tag/Tags";
import { page as _page, createStyle } from "./Tag/Classes";
import NavigationPanel from "./ControlPanel/NavigationPanel/NavigationPanel";
import AttributesPanel from "./ControlPanel/AttributesPanel/AttributesPanel";
// import FileSaver from "file-saver";
export default function Page(props) {
  // console.log("Page-App");

  const getTagStructure = (tags, parentId, styles) =>
    tags.filter((tag) => {
      if (tag.parentId === parentId) {
        tag.style = JSON.parse(
          JSON.stringify(styles.find((style) => style.id === tag.styleId).style)
        );
        tag.childrens = getTagStructure(tags, tag.id, styles);
        return tag;
      } else {
        return null;
      }
    });

  const [settings, setSettings] = useState();
  const [page, setPage] = useState(JSON.parse(JSON.stringify(_page)));
  const tags = getTagStructure(page.tags, null, page.styles);
  console.log("settings :>> ", settings);

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
    setPage({ ...page, tags: newTags, styles: [...page.styles, newStyle] });
  };
  const updateStyle = (style, styleId) => {
    console.log("style :>> ", style);

    const newStyles = page.styles.map((st) => {
      if (st.id === styleId) {
        return { ...st, style };
      } else {
        return st;
      }
    });
    setPage({ ...page, styles: [...newStyles] });
  };

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
      }
    };
  }, [settings]);

  return (
    <div>
      <NavigationPanel
        tags={tags}
        addTag={addTag}
        removeTag={removeTag}
        selected={settings && settings.preview}
      />
      {settings && (
        <AttributesPanel
          {...settings}
          newStyle={newStyle}
          updateStyle={updateStyle}
        />
      )}
      <Tags setSettings={setSettings} tags={tags} page={page} edit={true} />
    </div>
  );
}
