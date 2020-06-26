import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Tags from "./Tag/Tags";
import { page as _page } from "./Tag/Classes";
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
  const [page, setPage] = useState(_page);
  const tags = getTagStructure(page.tags, null, page.styles);

  const addTag = (item, parent) => {
    const newTag = {
      id: uuidv4(),
      parentId: parent.id,
      type: item,
      index: parent.childrens.length,
      styleId: _page.styles.find((style) => style.name === "newStyle").id,
      attributes: {},
      childrens: [],
    };
    setPage({ ...page, tags: [...page.tags, newTag] });
  };
  const removeTag = (tagId) => {
    // setSettings()
    setPage({
      ...page,
      tags: [...page.tags].filter((tag) => tag.id !== tagId),
    });
  };

  // console.log("page :>> ", page);
  // console.log('tags :>> ', tags);
  // console.log("settings :>> ", settings);

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
        selectedId={settings && settings.preview.id}
      />
      {settings && <AttributesPanel {...settings} />}
      <Tags
        setSettings={setSettings}
        tags={tags}
        // pageTags={page.tags}
        edit={true}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}
