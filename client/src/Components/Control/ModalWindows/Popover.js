import React, { useState, useEffect } from "react";
import MuiPopover from "@material-ui/core/Popover";
function Popover(props) {
  const { children } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
 
  const paper = {
    ...children[1],
    props: { ...children[1].props, close: handleClose },
  };

  const id = open ? "new-popover" : undefined;

  return (
    <>
      <div onClick={handleClick}>{children[0]}</div>
      <MuiPopover
        {...props}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        {paper}
      </MuiPopover>
    </>
  );
}
export default Popover;
