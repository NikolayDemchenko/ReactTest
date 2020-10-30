import React, { useState, useEffect } from "react";
import log from "../../../../Log";
import PropertiesPanel from "./PropertiesPanel";
import SettingsPanel from "./SettingsPanel";
import { createStyle } from "../../../../AppFunction";
function StylePanel(props) {
  // console.log("%cStylePanel-VerticalPanel-App", "color: green");
  // console.log("props :>> ", props);

  const {
    setPreview,
    selected,
    assignableStyle,
    setSettings,
    styleName,
    changeTag,
    tag,
    setStyleView,
    page,
    setPage,
  } = props;

  const [draggedProp, setDragged] = useState();
  const addStyle = (data, name, tag) => {
    setPage((page) => {
      const names = page.styles.map((style) => style.name);
      // let name = "Новый";
      names.forEach((element) => {
        if (element === name) {
          const namestr = name.replace(/\d/gi, "");
          const num = name.replace(/\D/gi, "");
          const namenum = Number(num) + 1;
          name = namestr + namenum;
        }
      });

      const newStyle = createStyle(data, name);
      const changedTag = { ...tag, styleId: newStyle.id };
      return {
        ...page,
        tags: page.tags.map((tag) => {
          if (changedTag.id === tag.id) {
            return changedTag;
          } else {
            return tag;
          }
        }),
        styles: [...page.styles, newStyle],
      };
    });
  };

  const updateStyleById = (styleId, propName, propValue, setPage) => {
    // console.log("page :>> ", page);
    // console.log("updateStyle", propName);
    setPage((page) => ({
      ...page,
      styles: page.styles.map((style) => {
        if (style.id === styleId) {
          return { ...style, [propName]: propValue };
        } else {
          return style;
        }
      }),
    }));
  };

  const updateStyleData = (data) =>
    updateStyleById(tag.styleId, "data", data, setPage);

  const updateStyleName = (name) => {       
    !page.styles.map((style) => style.name).find((element) => element === name) && updateStyleById(tag.styleId, "name", name, setPage);
  };

  const getDefaultStyleProps = (id) => {
    // console.log('getDefaultStyleProps :>> ', id);
    const result = Object.entries(getComputedStyle(document.getElementById(id)))
      .map(([key, value]) => {
        key = +key || key === "0" ? +key : key;
        return { key, value };
      })
      .filter((obj) => typeof obj.key !== "number");
    return result;
  };

  const setDraggedProp = (item) => {
    console.log("setDraggedProp", item);
    setDragged(item);
  };

  const setFullPreview = () => {
    console.log("setFullPreview");
    props.setStyleView({ styleViewFilter: (p) => p });
  };

  return (
    <div style={{ background: "rgba(30,40,57,.6)" }} title="CSS (JSS) Стили">
      <SettingsPanel
        {...{
          ...props,
          updateStyleName,
          updateStyleData,
          setPreview,
          selected,
          assignableStyle,
          setSettings,
          styleName,
          changeTag,
          tag,
          addStyle,
        }}
      />
      <PropertiesPanel
        {...{
          ...props,
          setFullPreview,
          updateStyleData,
          setStyleView,
          name: "Style",
          draggedProp,
          setDraggedProp,
          setPreview,
          allStyleProps: () => getDefaultStyleProps(tag.id),
        }}
      />
    </div>
  );
}

const change = (prev, next) => {
  // console.log("prevprops :>> ", prev);
  // console.log("nextprops :>> ", next);
};
export default React.memo(log(StylePanel));
