import React from "react";
import Property from "./Property";
import StylePanel from "./StylePanel";
import RenameObjectProperty from "../../../Function/RenameObjectProperty";
export default function Styles({ style, setStyle }) {
  const properties = [];
  const stylePanels = [];
  for (let key in style) {
    if (typeof style[key] !== "object") {
      properties.push({ [key]: style[key] });
    } else {
      stylePanels.push({ [key]: style[key] });
    }
  }

  // console.log('properties', properties)
  // console.log('style', style)
  console.log("stylePanels", stylePanels);
  const panels = stylePanels.map((panel) => {
    const setValue = (value) => {
      setStyle({ ...style, [Object.keys(panel)[0]]: value });
    };
    console.log("panel", Object.keys(panel)[0]);
    console.log("panel", Object.values(panel)[0]);
    return (
      <StylePanel
        name={Object.keys(panel)[0]}
        key={stylePanels.indexOf(panel)}
        style={Object.values(panel)[0]}
        setStyle={setValue}
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
    const deleteProperty = () => {
      delete style[Object.keys(property)[0]];
      setStyle(style);
    };
    return (
      <Property
        key={properties.indexOf(property)}
        property={property}
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
