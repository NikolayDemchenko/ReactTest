import React from "react";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
export default function PopoverPopupState({ children, paper, PaperProps }) {
  paper = paper === undefined ? true : paper;
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div
        //  onMouseUp={reload}
        >
          <div {...bindTrigger(popupState)}>{children[0]}</div>
          <Popover
            {...bindPopover(popupState)}
            // anchorOrigin={{
            //   vertical: "bottom",
            //   horizontal: "center",
            // }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            PaperProps={PaperProps}
            // anchorPosition =	{{ left: 10, top: 10 }}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            {paper && children[1]}
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
