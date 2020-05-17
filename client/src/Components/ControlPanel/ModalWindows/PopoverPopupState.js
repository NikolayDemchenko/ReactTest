import React from "react";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
function PopoverPopupState(props) {
  // console.log("PopoverPopupState");
  const { children } = props;
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <div {...bindTrigger(popupState)}>{children[0]}</div>
          <Popover {...props} {...bindPopover(popupState)}>
            {children[1]}
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
export default PopoverPopupState;

