import React from "react";
import Property from "./Property";
import PropertiesPanel from "./PropertiesPanel";
import RenameObjectProperty from "./Function/RenameObjectProperty";
import {
  addNewPropUp,
  addNewPropDown,
  removeThisLevelPropByName as removeProp,
} from "./Function/ObjectManager";
export default function Properties(props) {
  // console.log(
  //   "%cProperties-PropertiesPanel",
  //   'color: green');
  // console.log('props :>> ', props);
  const { style, setStyle, setPreview } = props;

  const properties = [];
  const propPanels = [];
  for (let key in style) {
    if (typeof style[key] !== "object") {
      properties.push({ [key]: style[key] });
    } else {
      propPanels.push({ [key]: style[key] });
    }
  }
  const setName = (item, value, chain) => {
    setStyle(
      RenameObjectProperty(style, Object.keys(item)[0], value),
      `\nsetName-Properties ${chain}`
    );
  };
  const setValue = (item, value, chain) => {
    // console.log('value :>> ', value);
    style[Object.keys(item)[0]] = value;
    setStyle({ ...style }, `\nsetValue-Properties ${chain}`);
    // console.log('{ ...style } :>> ', { ...style });
  };

  const remove = (item, chain) => {
    console.log("item :>> ", item);
    delete style[Object.keys(item)[0]];
    console.log("style :>> ", style);
    setStyle(style, `\nremove-Properties ${chain}`);
    setPreview(style);
  };
  const panels = propPanels.map((panel, index) => {
    const setPreviewPanel = (value) => {   
      setPreview({ ...style, [Object.keys(panel)[0]]: value });
    };
    return (
      <PropertiesPanel
        {...props}
        name={Object.keys(panel)[0]}
        key={index}
        style={Object.values(panel)[0]}
        setName={(name, chain) => setName(panel, name, chain)}
        setStyle={(style, chain) => setValue(panel, style, chain)}
        baseStyle={style}
        deletePanel={(chain) => remove(panel, chain)}
        setPreview={setPreviewPanel}
      />
    );
  });
  // console.log("properties", properties);
  const thisProps = properties.map((property, index) => {
    const setPreviewValue = (value) => {
      // console.log('setPreviewValue', value)
      setPreview({ ...style, [Object.keys(property)[0]]: value });

      // console.log('{ ...style, [Object.keys(property)[0]]: value } :>> ', { ...style, [Object.keys(property)[0]]: value });
    };

    const onDrop = (targetProp, draggedProp, target, chain) => {
      console.log("draggedProp", draggedProp);
      const addNewProp = (foo) =>
        foo(
          removeProp(style, Object.keys(draggedProp)[0]),
          targetProp,
          draggedProp
        ).obj;
      if (target === "up") {
        setStyle(addNewProp(addNewPropUp), `\nonDrop-Properties ${chain}`);
      } else if (target === "down") {
        setStyle(addNewProp(addNewPropDown), `\nonDrop-Properties ${chain}`);
      }
    };

    return (
      <Property
        {...props}
        key={index}
        tabIndex={index}
        property={property}
        setPreview={setPreviewValue}
        setName={(name, chain) => setName(property, name, chain)}
        setValue={(value, chain) => setValue(property, value, chain)}
        deleteProperty={(chain) => remove(property, chain)}
        onDrop={onDrop}
      />
    );
  });

  return (
    <div>
      {thisProps}
      {panels}
    </div>
  );
}
