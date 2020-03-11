import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
export default function CustomizedSelects({ defaultItem, setItem, listItems }) {
  const BootstrapInput = withStyles(theme => ({
    root: {
      "label + &": {
        marginTop: theme.spacing(3)
      }
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "2px ",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(","),
      "&:focus": {
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
      }
    }
  }))(InputBase);
  const items = listItems.map(list => (
    <MenuItem key={list.name} value={list.name}>
      {list.name}
    </MenuItem>
  ));
  return (
    <div>
      <Select
        // labelId="demo-customized-select-label"
        // id="demo-customized-select"
        value={listItems.find(list => list.value === defaultItem).name}
        onChange={e => {
          setItem(listItems.find(list => list.name === e.target.value));
        }}
        input={<BootstrapInput />}
      >
        {items}
      </Select>
    </div>
  );
}
