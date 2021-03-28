import React, {
  FC,
  useState,
} from 'react';

import { IFCProperties } from '../../../../Types/IProps';
// import {log,funcLog} from "../../../../Log";
import {
  addNewPropDown,
  addNewPropUp,
  removeThisLevelPropByName as removeProp,
} from './Function/ObjectManager';
import RenameObjectProperty from './Function/RenameObjectProperty';
import PropertiesPanel from './PropertiesPanel';
import Property from './Property';

const Properties:FC<IFCProperties>=(props)=> {
  // console.log(
  //   "%cProperties-PropertiesPanel",
  //   'color: green');
  // console.log("props :>> ", props);
  const {
    panelStyle,
    updateStyleData,
  } = props;
	const [draggedProp, setDraggedProp] = useState();
  console.log(`draggedProp`, draggedProp)
  const properties = [];
  const propPanels = [];
  for (let key in panelStyle) {
    if (typeof panelStyle[key] !== "object") {     
      properties.push({name: key,value: panelStyle[key] });
    } else {    
      propPanels.push({name: key,value: panelStyle[key] });
    }
  }
  const setName = (name:string, newName:string) => {
    const prop = RenameObjectProperty(panelStyle, name, newName);
    updateStyleData(prop);  
  };
  const setValue = (name:string, value:string) => {
    // console.log('value :>> ', value);
    updateStyleData({ ...panelStyle, [name]: value });
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
        key={index}
        name={panel.name}
        panelStyle={panel.value}
        setName={(name) => setName(panel.name, name)}
        updateStyleData={(panelStyle) => setValue(panel.name, panelStyle)}    
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
        setName={(name) => setName(property.name, name)}
        setValue={(value) => setValue(property.name, value)}
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
export default Properties;
// export default log(Properties);
// export default React.memo(log(Properties));
