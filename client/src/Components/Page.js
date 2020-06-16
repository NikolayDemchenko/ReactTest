import React, { useState, useEffect } from "react";
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

  const addTag=(item)=>{
    console.log("item :>> ", item);
  }

  // console.log("page :>> ", page);
  // console.log("settings :>> ", settings);

  useEffect(() => {
    if (settings) {
      const style = document.getElementById(settings.preview.id).style;
      // console.log("nextId", settings.id, style);
      style.outline = "1px dashed #5af";
    }
    return () => {
      if (settings) {
        const style = document.getElementById(settings.preview.id).style;
        // console.log("prevId", settings.id, style);
        style.outline = "";
      }
    };
  }, [settings]);

  return (
    <div>
      <NavigationPanel
        tags={tags}
        addTag={addTag}
        selectedId={settings && settings.preview.id}
      />
      {settings && <AttributesPanel {...settings} />}
      <Tags setSettings={setSettings} tags={tags} setPage={setPage} />
    </div>
  );
}
