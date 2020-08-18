import React, { useState, useEffect } from "react";
import log from "../Log";
import { v4 as uuidv4 } from "uuid";
import Tags from "./Tag/Tags";
import { getParentBranch } from "./Tag/HocTag";
import { page as _component } from "./Tag/Classes";
import { createStyle } from "../AppFunction";
import NavigationPanel from "./ControlPanel/NavigationPanel/NavigationPanel";
import { SaveToJSON } from "../AppFunction";
import jss from "jss";
import preset from "jss-preset-default";
import axios from "axios";

// import FileSaver from "file-saver";
function Component(props) {
  // console.log("component-App");

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

  const [component, setComponent] = useState(JSON.parse(JSON.stringify(_component)));
  // console.log("component.tags :>> ", component.tags);

  const tags = getTagStructure([...component.tags], null, [...component.styles]);

  jss.setup(preset());
  const myStyles = {};
  component.styles.forEach(({ id, style }) => {
    myStyles[id] = style;
  });
  const { classes } = jss.createStyleSheet({ ...myStyles }).attach();

  const addTag = (type, parent) => {
    const newTag = {
      id: uuidv4(),
      parentId: parent.id,
      type,
      index: parent.childrens.length,
      styleId: component.styles.find((style) => style.name === "newStyle").id,
      attributes: {},
      childrens: [],
    };

    setComponent({ ...component, tags: [...component.tags, newTag] });
  };

  const removeTag = (tagId) => {
    const newTags = [...[...component.tags].filter((tag) => tag.id !== tagId)];

    console.log("newTags", newTags);
    setSettings();
    setComponent({ ...component, tags: newTags });
  };

  const addStyle = (style, name, tag) => {
    const newStyle = createStyle(style, name);
    const changedTag = { ...tag, styleId: newStyle.id };
    const newTags = component.tags.map((tag) => {
      if (changedTag.id === tag.id) {
        return changedTag;
      } else {
        return tag;
      }
    });
    console.log("component", component);
    setComponent({ tags: newTags, styles: [...component.styles, newStyle] });
    return changedTag;
  };

  const changeTag = (tag, propName, propValue) => {
    const changedTag = { ...tag, [propName]: propValue };
    // console.log('changedTag :>> ', changedTag);
    const tags = component.tags.map((tag) => {
      if (changedTag.id === tag.id) {
        return changedTag;
      } else {
        return tag;
      }
    });
    setComponent({ ...component, tags });
    return changedTag;
  };

  const updateStyle = (style, styleId) => {
    // console.log("style :>> ", style);

    const styles = component.styles.map((st) => {
      if (st.id === styleId) {
        return { ...st, style };
      } else {
        return st;
      }
    });
    // Сборщик айдишек для рендера
    const getAllParents = (tagsForRender = []) => {
      let tFR = [];
      tagsForRender.forEach((tag) => {
        // console.log("tag :>> ", tag);
        tFR.push(tag.id);
        tFR = [...getParentBranch(component.tags, tag), ...tFR];
      });
      return Array.from(new Set(tFR));
    };

    setSettings({
      ...settings,
      tagsForRender: getAllParents(
        component.tags.filter((t) => t.styleId === styleId)
      ),
    });
    setComponent({ ...component, styles });
  };

  let config = {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    responseType: "blob",
  };
  return (
    <div>
      <NavigationPanel
        tags={tags}
        addTag={addTag}
        removeTag={removeTag}
        saveComponent={() => {    
          axios({
            method: "post",
            url: "http://localhost:8000/components",
            data: {component:JSON.stringify(component)},
          })
            .then((response) => {
              console.log(response.data);
            })
            .catch(function (error) {
              console.log(error);
            });
        }}
        // savecomponent={() => SaveToJSON(component)}
        selectedId={settings && settings.selectedId}
      />
      <Tags
        {...{
          ...settings,
          setSettings,
          tags,
          component,
          changeTag,
          addStyle,
          updateStyle,
          classes,
        }}
      />
    </div>
  );
}
export default log(Component);
