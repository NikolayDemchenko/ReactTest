import React from "react";
import PropTypes from "prop-types";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

function SelectModal({ defaultItem, setItem, listItems }) {
  // console.log('listItems', listItems)
  // console.log("defaultItem", defaultItem);

  const items = listItems.map((item) => (
    <MenuItem
      key={item.name}
      value={item.name}
      style={{
        // outline: "1px solid red",
        background: "rgb(43,50,66)",
        color: "rgba(140, 200, 255, 0.8)",
      }}
    >
      {item.name}
    </MenuItem>
  ));
  // console.log('SelectItem', defaultItem)
  const itemName = listItems.find((item) => item.value === defaultItem);
  const firstName = listItems[0].value.name;
  return (
    <div>
      <Select
        // SelectDisplayProps={{
        //   style: { background: "rgba(43,50,66,.95)", border: "1px solid #abc" },
        // }}
        style={{ color: "rgba(140, 200, 255, 0.8)" }}
        value={itemName !== undefined ? itemName.name : firstName}
        onChange={(e) => {
          setItem(listItems.find((item) => item.name === e.target.value));
        }}
      >
        {items}
      </Select>
    </div>
  );
}

SelectModal.propTypes = {
  defaultItem: PropTypes.string,
  listItems: PropTypes.array,
  setItem: PropTypes.func,
};
export default SelectModal;
