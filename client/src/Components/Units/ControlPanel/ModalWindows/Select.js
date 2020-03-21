import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
export default function Selects({ defaultItem, setItem, listItems }) {

  // console.log('listItems', listItems)
  // console.log('defaultItem', defaultItem)
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
  const items = listItems.map(item => (
    <MenuItem key={item.name} value={item.name}>
      {item.name}
    </MenuItem>
  ));
  // console.log('SelectItem', defaultItem)
  return (
    <div>
      <Select
        value={listItems.find(item => item.value === defaultItem).name}
        onChange={e => {
          setItem(listItems.find(item => item.name === e.target.value));
        }}
        input={<BootstrapInput />}
      >
        {items}
      </Select>
    </div>
  );
}
