import React from "react";
import Types from '../Class/Types'
export default function Select({onClick }) {
  const items = Types.map(item => <option onClick={()=>onClick(item.type)}>{item.name}</option>);
  return <select>{items}</select>;
}
