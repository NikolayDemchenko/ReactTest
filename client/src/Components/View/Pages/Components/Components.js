import React from "react";
import log from "../../../../Log";
import Component from './Component'
function Components(props) {
  // console.log("props", props);
  return props.components.map((component, key) => {
    return <Component {...{component, key}}/>;
  });
}
export default log(Components);