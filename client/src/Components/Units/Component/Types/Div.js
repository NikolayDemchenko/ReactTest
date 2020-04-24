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
    setControlPanel({ unit:{...unit,selected:true}, setUnit });
    console.log("Передача данных в панель управления", new Date(), {...unit,selected:true});  
  }
}
  return (<>

    <unit.tag
      // tabIndex="0" 
      className={classes.style}
      onClick={(event) => {
        event.stopPropagation();
        console.log('Клик')
        // Должна быть вызвана функция очищения предыдущего компонента от интерфейсных полей таких как "selected"
        setPanel();
      }}
      >
      {children}
    </unit.tag>
    <div style={{height:"300px", width:"100%", background:"#457"}}></div>
      </>
  );
}
export default Div;
