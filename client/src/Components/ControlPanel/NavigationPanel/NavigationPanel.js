import React, { useState } from "react";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";
import Icon from "react-icons-kit";
import VerticalPanel from "../VerticalPanel/VerticalPanel";
import Popover from "../ModalWindows/PopoverPopupState";
function NavigationPanel(props) {
  // Отобразить тип тега
  // Если у тега есть чилдрены перебрать чилдрены и вывести их тип
  // console.log("props.tag", props.tag);
  return <Tag {...props} />;
}

function Tag({ tag: { type, childrens }, index }) {
  const [showChilds, setshowChilds] = useState(false);
  const changeToggle = () => setshowChilds(!showChilds);

  const _icon = <Icon size={"100%"} icon={ic_keyboard_arrow_right} />;

  const icon = !showChilds ? (
    <div>{_icon}</div>
  ) : (
    <div style={{ transform: "rotate(90deg)" }}>{_icon}</div>
  );
  const toggle = childrens ? (
    <div style={{ cursor: "pointer", width: "20px" }} onClick={changeToggle}>
      {icon}
    </div>
  ) : null;  
  const id =  index ? index : '0';
  // console.log("nav.id", id);
  return (
    <div>
      <div
        style={{
          display: "flex",
          color: "rgba(140, 200, 255, 0.8)",
        }}
      >
        {toggle}
        <div
          onClick={(e) => {
            e.preventDefault();
            const element=document.getElementById(id)
            element.click();
            // element.style.border= "1px dashed #5af"
            // console.log('element', element.style)
          }}
          style={{
            cursor: "default",
            borderBottom: "2px solid #55667766",
            background: "rgba(30,40,57,.4)",
          }}
        >
          id: {id} type: {type}
        </div>
      </div>
      <div style={{ marginLeft: "30px" }}>
        {childrens && showChilds && (
          <Childrens childrens={childrens} index={id} />
        )}
      </div>
    </div>
  );
}

function Childrens(props) {
  return props.childrens.map((children, index) => {
    return (
      <div style={{ display: "flex" }} key={index}>
        <Tag {...props} tag={children} index={props.index + "_" + index} />
      </div>
    );
  });
}
export default NavigationPanel;
