import React from "react";
export default function Select({ listItems, defaultItem, setItem }) {
  const items = listItems.map(list => <option key={list.name}>{list.name}</option>);

  let select;
  return (
    <select
      ref={node => (select = node)}
      onChange={() =>
        setItem(listItems.find(list => list.name === select.value))
      }
      defaultValue={listItems.find(list=> list.value === defaultItem).name}
    >
      {items}
    </select>
  );
}
