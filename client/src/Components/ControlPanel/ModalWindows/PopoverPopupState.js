import React from "react";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
export default function PopoverPopupState(props) {
  let { children, paper } = props;
  paper = paper === undefined ? true : paper;
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div
        //  onMouseUp={reload}
        >
          <div {...bindTrigger(popupState)}>{children[0]}</div>
          <Popover
            {...props}
            {...bindPopover(popupState)}           
          >
            {paper && children[1]}
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
