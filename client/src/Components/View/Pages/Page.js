import React from "react";
import log from "../../../Log";
import Components from './Components/Components'
function Page(props) {
  // console.log("props", props);

  return <Components {...{...props}} />;
}
export default log(Page);
