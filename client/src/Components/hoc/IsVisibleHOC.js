import React from "react";
export default WrappedComponent=> props =>isVisible=> {  
  console.log("IsVisibleHOC: ", isVisible);
  if (isVisible) {
    return <WrappedComponent {...props} />;
  } else {
    return null;
  }
};
