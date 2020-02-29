import React from "react";
export default function Select({ types, type }) {
  const items = types.map(item => <option key={item.name}>{item.name}</option>);
  let select;
  return (
    <select
      ref={node => (select = node)}
      onChange={() =>
        type.onClick(types.find(item => item.name === select.value).type)
      }
      defaultValue={types.find(item => item.type === type.value).name}
    >
      {items}
    </select>
  );
}
