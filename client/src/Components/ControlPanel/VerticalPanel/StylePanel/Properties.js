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
  const setName = (item, value) => {
    setStyle(RenameObjectProperty(style, Object.keys(item)[0], value));
  };
  const setValue = (name, value) => {
    style[Object.keys(name)[0]]=value
    setStyle(style);
  };
  const remove = (item) => {
    delete style[Object.keys(item)[0]];
    setStyle(style);
  };

  const panels = propPanels.map((panel) => {
    return (
      <PropertiesPanel
        {...props}
        name={Object.keys(panel)[0]}
        key={propPanels.indexOf(panel)}
        style={Object.values(panel)[0]}
        setName={(v) => setName(panel, v)}
        setStyle={(v) => setValue(panel, v)}
        baseStyle={style}
        deletePanel={() => remove(panel)}
      />
    );
  });
  // console.log("properties", properties);
  const thisProps = properties.map((property, index) => {
    const setPreviewValue = (value) => {
      // console.log('setPreviewValue', value)

      setPreview({ ...style, [Object.keys(property)[0]]: value });
    };

    const onDrop = (targetProp, draggedProp, target) => {
      console.log("draggedProp", draggedProp);
      const addNewProp = (foo) =>
        foo(
          removeProp(style, Object.keys(draggedProp)[0]),
          targetProp,
          draggedProp
        ).obj;
      if (target === "up") {
        setStyle(addNewProp(addNewPropUp));
      } else if (target === "down") {
        setStyle(addNewProp(addNewPropDown));
      }
    };

    return (
      <Property
        {...props}
        key={index}
        tabIndex={index}
        property={property}
        setPreview={setPreviewValue}
        setProperty={{
          setName: (v) => setName(property, v),
          setValue: (v) => setValue(property, v),
        }}
        deleteProperty={() => remove(property)}
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
