import React from "react";
import Types from "../Class/Types";
export default function Select({ type, onClick }) {
  const items = Types.map(item => <option key={item.name}>{item.name}</option>);
  let select;
  return (
    <select
      ref={node => (select = node)}
      onChange={() =>
        onClick(Types.find(item => item.name === select.value).type)
      }
      defaultValue={Types.find(item => item.type === type).name}
    >
      {items}
    </select>
  );
}
