import React from "react";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
export default function PopoverPopupState({ children, reload }) {
 
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {popupState => (
        <div onClick={reload}>
          <div {...bindTrigger(popupState)}>{children[0]}</div>
          <Popover 
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
          >
            {children[1]}
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
