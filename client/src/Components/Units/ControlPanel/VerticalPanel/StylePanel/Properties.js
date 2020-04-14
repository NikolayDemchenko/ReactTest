import React from "react";
import Property from "./Property";
import PropertiesPanel from "./PropertiesPanel";
import RenameObjectProperty from "../../../Function/RenameObjectProperty";
export default function Styles({
  style,
  setStyle,
  setPreview,
  setSelected,
  selected,
  parentName,
}) {
  const properties = [];
  const stylePanels = [];
  for (let key in style) {
    if (typeof style[key] !== "object") {
      properties.push({ [key]: style[key] });
    } else {
      stylePanels.push({ [key]: style[key] });
    }
  }

  const panels = stylePanels.map((panel) => {
    const setName = (value) => {
      setStyle(RenameObjectProperty(style, Object.keys(panel)[0], value));
    };
    const setValue = (value) => {
      setStyle({ ...style, [Object.keys(panel)[0]]: value });
    };

    const deletePanel = () => {
      delete style[Object.keys(panel)[0]];
      setStyle(style);
    };
    return (
      <PropertiesPanel
        parentName={parentName}
        name={Object.keys(panel)[0]}
        key={stylePanels.indexOf(panel)}
        style={Object.values(panel)[0]}
        setName={setName}
        setStyle={setValue}
        baseStyle={style}
        setPreview={setPreview}
        selected={selected}
        setSelected={setSelected}
        deletePanel={deletePanel}
      />
    );
  });

  const props = properties.map((property) => {
    // console.log('property', property)
    const setName = (value) => {
      setStyle(RenameObjectProperty(style, Object.keys(property)[0], value));
    };
    const setValue = (value) => {
      setStyle({ ...style, [Object.keys(property)[0]]: value });
    };
    const setPreviewValue = (value) => {
      setPreview({ ...style, [Object.keys(property)[0]]: value });
    };

    const deleteProperty = () => {
      delete style[Object.keys(property)[0]];
      setStyle(style);
    };
    return (
      <Property
        key={properties.indexOf(property)}
        property={property}
        setPreview={setPreviewValue}
        setProperty={{ setName, setValue }}
        deleteProperty={deleteProperty}
      />
    );
  });
  return (
    <div >
      {props}
      {panels}
    </div>
  );
}
