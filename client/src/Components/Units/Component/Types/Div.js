import React from "react";
import jss from "jss";
import preset from "jss-preset-default";
function Div({ unit, setUnit, setControlPanel, children }) {
  let { style } = unit.tagProps;

  jss.setup(preset());
  const { classes } = jss
    .createStyleSheet({
      style,
    })
    .attach();
const setPanel=()=>{
  if(!unit.selected){  
    console.log("Передача данных в панель управления", new Date(), {...unit,selected:true});  
    setControlPanel({ unit:{...unit,selected:true}, setUnit });
  }
}
  return (
    <unit.tag
      tabIndex="0"
      className={classes.style}
      onClick={(event) => {
        event.stopPropagation();

        // Должна быть вызвана функция очищения предыдущего компонента от интерфейсных полей таких как "selected"
        setPanel();
      }}
    >
      {children}
    </unit.tag>
  );
}
export default Div;
