import React from "react";
import Property from "./Property";
import PropertiesPanel from "./PropertiesPanel";
import RenameObjectProperty from "./Function/RenameObjectProperty";
import {log,funcLog} from "../../../../Log";
import {
  addNewPropUp,
  addNewPropDown,
  removeThisLevelPropByName as removeProp,
} from "./Function/ObjectManager";
function Properties(props) {
  // console.log(
  //   "%cProperties-PropertiesPanel",
  //   'color: green');
  // console.log("props :>> ", props);
  const {
    draggedProp,
    setDraggedProp,
    panelStyle,
    updateStyleData,
    // setPreview,
  } = props;

  const properties = [];
  const propPanels = [];
  for (let key in panelStyle) {
    if (typeof panelStyle[key] !== "object") {     
      properties.push({name: key,value: panelStyle[key] });
    } else {    
      propPanels.push({name: key,value: panelStyle[key] });
    }
  }
  const setName = (item, newName) => {
    const prop = RenameObjectProperty(panelStyle, item.name, newName);
    updateStyleData(prop);  
  };
  const setValue = (item, value) => {
    // console.log('value :>> ', value);
    updateStyleData({ ...panelStyle, [item.name]: value });
  };

  const remove = (item) => {
    console.log("remove property :>> ", item);
    const style = {}; 
    for (let key in panelStyle) {
      if (key !== item.name) {
        style[key]=panelStyle[key]
      }
    }   
    // console.log("style :>> ", style);
    updateStyleData(style);   
  };

  const panels = propPanels.map((panel, index) => {

    return (
      <PropertiesPanel
        {...props}
        name={panel.name}
        key={index}
        panelStyle={panel.value}
        setName={(name) => setName(panel, name)}
        updateStyleData={(panelStyle) => setValue(panel, panelStyle)}    
        removePanel={() => remove(panel)}  
      />
    );
  });
  // console.log("properties", properties);
  const thisProps = properties.map((property, index) => {
    // const setPreviewValue = (value) => {
    //   // console.log('value', value)
    //   setPreview({ ...panelStyle, [property.name]: value });
    // };

    const onDrop = (targetProp, draggedProp, target) => {
      // console.log("draggedProp", draggedProp);
      const addNewProp = (foo) =>
        foo(
          removeProp(panelStyle, Object.keys(draggedProp)[0]),
          targetProp,
          draggedProp
        ).obj;
      if (target === "up") {
        updateStyleData(addNewProp(addNewPropUp));
      } else if (target === "down") {
        updateStyleData(addNewProp(addNewPropDown));
      }
    };

    return (
      <Property
        {...{ ...props, draggedProp, setDraggedProp }}
        key={index}      
        name={property.name}
        value={property.value}       
        setName={(name) => setName(property, name)}
        setValue={(value) => setValue(property, value)}
        removeProperty={() => remove(property)}
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
// export default Properties;
export default log(Properties);
// export default React.memo(log(Properties));
