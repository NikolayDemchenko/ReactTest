import React from "react";
export default WrappedComponent=> props =>visible=> { 
  // console.log("IsVisibleHOC: ", isVisible);
  if (visible===true) {
    return <WrappedComponent {...props} />;
  } else {
    return null;
  }
};
