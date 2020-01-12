import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";

export default (Component1,props1) =>(Component2,props2)  => (Component3,props3) => {
  return <div className={style.ColumnGroup}>
    <Component1 {...props1}/>
    <Component2 {...props2}/>
    <Component3 {...props3}/>
  </div>;
};