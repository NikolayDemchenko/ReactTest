import React from "react";
export default ({ ClickHandler, arg, type, style }) => {
  if (arg !== null) {
    return (
      <div onClick={() => ClickHandler(arg, type)} className={style}></div>
    );
  } else {
    return <div />;
  }
};
