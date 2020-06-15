import React, { useState, useEffect } from "react";
import SelectPopover from "./SelectPopover";
// Переделать под универсальный вариант
export default function SelectPanel(props) {
  // console.log("_items :>> ", _items);
  // useEffect(() => {
  //   return () => {
  //     _setItems();
  //   };
  // }, []);
  // console.log('htmlTags :>> ', htmlTags);

  return (
    <SelectPopover
      {...props}
      // item={selectedItem}
      // items={_items}
      // setItem={setItem && setItem}
      // changeItem={changeItems}
      // button={button}
    />
  );
}
