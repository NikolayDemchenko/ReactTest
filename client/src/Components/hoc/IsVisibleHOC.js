import React from "react";
export default WrappedComponent=> props =>visible=> { 
 
  if (visible===true) {
    return <WrappedComponent {...props} />;
  } else  {
    return  null;
  }
};
