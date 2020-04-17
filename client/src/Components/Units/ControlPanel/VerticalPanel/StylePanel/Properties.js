import React from "react";
import Property from "./Property";
import PropertiesPanel from "./Panel";
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
  const propPanels = [];
  for (let key in style) {
    if (typeof style[key] !== "object") {
      properties.push({ [key]: style[key] });
    } else {
      propPanels.push({ [key]: style[key] });
    }
  }

  const panels = propPanels.map((panel) => {
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
        key={propPanels.indexOf(panel)}
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
      console.log('getTopDataWithProp(style, property)', getTopDataWithProp(style, property))
      console.log('getTopDataWithinProp(style, property)', getTopDataWithinProp(style, property))
    };

    const getTopData = (style, property) => {
      let newObject;
      for (let key in style) {
        if (key !== Object.keys(property)[0]) {
          newObject = { ...newObject, [key]: style[key] };
        } else {
          console.log("newObject", newObject);
          return newObject;
        }
      }
    };
    const getTopDataWithProp = (style, property) => ({
      ...getTopData(style, property),
      ...property,_field:"Пустое поле",...style
    });
    const getTopDataWithinProp = (style, property) => ({
      ...getTopData(style, property),
      _field:"Пустое поле",...style
    });

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
    <div>
      {props}
      {panels}
    </div>
  );
}
