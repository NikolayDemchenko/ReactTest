import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import VerticalArrows from '../../../Buttons/VerticalArrows/VerticalArrows'
import Popover from "../Popover/PopoverPopupState";

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 300
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 200,
    borderRadius: 4
  },
  rail: {
    height: 200,
    borderRadius: 4
  }
})(Slider);

export default function CustomizedSlider({btnColor}) {
    function valuetext(value) {
        return `${value}°C`;
      }
  return (
    <div >
      <Popover>
      <VerticalArrows  color={btnColor.active}/>
        <PrettoSlider
        //  orientation="vertical"
        //  getAriaValueText={valuetext}
         defaultValue={30}
        //  aria-labelledby="vertical-slider"
        />
      </Popover>
    </div>
  );
}
