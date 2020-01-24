import React from "react";

export default ({ template }) => {
  return (
    <div>
      <div>{template.name}</div>
      <ol>
        {template.groups.map(({ id, name, elements }) => (
          <li key={id}>
            {name}
            <ol>{elements!==undefined?elements.map(({ id, name }) => (
              <li key={id}>{name}<input/></li>
            )):null}</ol>
          </li>
        ))}
      </ol>
    </div>
  );
};
