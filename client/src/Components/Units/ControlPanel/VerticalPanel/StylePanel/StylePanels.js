import React from "react";
import Styles from "./Styles";
function StylePanelGenerator(props) {
  const { style, setStyle } = props;

  const getClasses = (obj) => {
    const styleClasses = [];
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        // console.log('obj[key]', obj[key])
        styleClasses.push({ [key]: obj[key] });
        delete obj[key];
      }
    }
    styleClasses.unshift({ ["style"]: obj });
    return styleClasses;
  };
  // console.log("getClasses(style)", getClasses(style));
  
  // return (
  //   <div >
  //     <Styles style={style} setStyle={setStyle} />
  //   </div>
  // );

  return getClasses(style).map((_style) => {
    // console.log("_style", _style);
    for (let key in _style) {
      // console.log("key", key);
      return (
        <div key={[key]}>
          <Styles style={_style[key]} setStyle={setStyle} />
        </div>
      );
    }
  });
}

export default StylePanelGenerator;
