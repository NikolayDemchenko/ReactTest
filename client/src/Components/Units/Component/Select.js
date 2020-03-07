import React from "react";
export default function Select({ list, selected }) {
  const items = list.map(item => <option key={item.name}>{item.name}</option>);
  // console.log('selected',selected)
  let select;
  return (
    <select
      ref={node => (select = node)}
      onChange={() =>
        selected.onClick(list.find(item => item.name === select.value).selected)
      }
      defaultValue={list.find(item => item.selected === selected.value).name}
    >
      {items}
    </select>
  );
}
