import React from "react";
export default WrappedComponent=> props =>value=> {  
  console.log("----- itemId: ", value);
  if (value !== null) {
    return <WrappedComponent {...props} />;
  } else {
    return null;
  }
};
