import React from "react";
import Types from "../Class/Types";
export default function Select({ type, onClick }) {
  const items = Types.map(item => (
    <option key={item.name} onClick={() => onClick(item.type)}>
      {item.name}
    </option>
  ));
  return (
    <select defaultValue={Types.find(item => item.type === type).name}>{items}</select>
  );
}
