import React from "react";


export default function Input({ setValue, value }) {
  const handleKeyPress = event => {
    if (event.key === "Enter") {
      setValue(input.value);
    }
  };
  let input;
  return (   
        <input
          style={{
            width: "100%", 
            paddingLeft:"4px",      
            border: "0px",           
          }}
          type={"text"}
          ref={n => (input = n)}
          onKeyPress={handleKeyPress}
          onBlur={() => setValue(input.value)}
         defaultValue={value}   
        />
   
  );
}
