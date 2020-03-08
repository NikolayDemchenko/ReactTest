import React from "react";
export default function Select({ list, item, setItem }) {
  const items = list.map(listItem => <option key={listItem.name}>{listItem.name}</option>);

  let select;
  return (
    <select
      ref={node => (select = node)}
      onChange={() =>
        setItem(list.find(listItem => listItem.name === select.value).type)
      }
      defaultValue={list.find(listItem => listItem.type === item).name}
    >
      {items}
    </select>
  );
}
