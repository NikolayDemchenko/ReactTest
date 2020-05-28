import React, { useState } from "react";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";
import Icon from "react-icons-kit";
import { Link } from "react-scroll";
import jss from "jss";
import preset from "jss-preset-default";
function NavigationPanel(props) {
  const style = {
    // flexWrap: "wrap",
    minWidth: "280px",
    maxWidth: "280px",
    maxHeight: "95vh",
    overflowY: "auto",
    // fontSize:"16px",
    position: "fixed",
    top: "20px",
    left: 0,
    zIndex: 999,
    // backgroundColor: "#456",
    color: "rgba(140, 200, 255, 0.8)",
    boxShadow: "2px 10px 5px 2px #00000055",
    "&::-webkit-scrollbar": { width: "20px" },
    "&::-webkit-scrollbar-thumb": { backgroundColor: "#567" },
  };
  jss.setup(preset());
  const { classes } = jss
    .createStyleSheet({
      style,
    })
    .attach();
  // const [selectedId, setSelectedId] = useState();
  const [showPanel, setShowPanel] = useState(false);
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          backgroundColor: "#456c",
          maxWidth: "100px",
          display: "flex",
          justifyContent: "center",
          padding: "0 10px",
          cursor: "pointer",
        }}
        onClick={(e) => {
          e.stopPropagation();
          console.log("setShowPanel");
          setShowPanel(!showPanel);
        }}
      >
        Navigation
      </div>
      {showPanel && (
        <div className={classes.style}>
          <Tag
            {...props}    
          />
        </div>
      )}
    </div>
  );
}

function Tag({ tag: { type, childrens }, index, selectedId, setSelectedId }) {
  const [showChilds, setshowChilds] = useState(false);

  const _icon = <Icon size={"100%"} icon={ic_keyboard_arrow_right} />;

  const icon = !showChilds ? (
    <div>{_icon}</div>
  ) : (
    <div style={{ transform: "rotate(90deg)" }}>{_icon}</div>
  );
  const toggle = childrens ? (
    <div
      style={{ cursor: "pointer", width: "20px" }}
      onClick={(e) => {
        e.stopPropagation();
        setshowChilds(!showChilds);
      }}
    >
      {icon}
    </div>
  ) : null;
  const id = index ? index : "0";
  const background =
    id === selectedId ? "rgba(30,60,97,1)" : "rgba(30,40,57,.4)";
  return (
    <div>
      <Link
        activeClass="active"
        to={id}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <div
          onClick={(e) => {
            e.preventDefault();
            setSelectedId(id);
            document.getElementById(id).click();
          }}
          style={{
            display: "flex",
            borderBottom: "2px solid #55667766",
            background,
            cursor: "default",
            // outline: "1px solid white",
          }}
        >
          {toggle}
          id: {id} type: {type}
        </div>
      </Link>
      <div style={{ marginLeft: "30px" }}>
        {childrens && showChilds && (
          <Childrens
            childrens={childrens}
            index={id}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        )}
      </div>
    </div>
  );
}

function Childrens(props) {
  return props.childrens.map((children, index) => {
    return (
      // <div style={{ display: "flex" }} key={index}>
      <Tag
        {...props}
        key={index}
        tag={children}
        index={props.index + "_" + index}
      />
      // </div>
    );
  });
}
export default NavigationPanel;
