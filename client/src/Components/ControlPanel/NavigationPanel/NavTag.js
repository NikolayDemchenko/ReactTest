import React, { useState } from "react";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";
import Icon from "react-icons-kit";
import { Link } from "react-scroll";
import NavTags from "./NavTags";
import CRUDTag from "./CreateTag/CRUDTag";

function NavTag(props) {
  const { tag, addTag, selectedId }=props
  const { type, childrens, id } = tag;
  const [showChilds, setshowChilds] = useState(false);
  // console.log("id :>> ", id);
  // console.log("selectedId :>> ", selectedId);
  const _icon = <Icon size={"100%"} icon={ic_keyboard_arrow_right} />;

  const icon = !showChilds ? (
    <div>{_icon}</div>
  ) : (
    <div style={{ transform: "rotate(90deg)" }}>{_icon}</div>
  );
  // console.log('childrens', childrens)
  const toggle =
    childrens.length > 0 ? (
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

  const background =
    id === selectedId ? "rgba(30,60,97,1)" : "rgba(30,40,57,.8)";

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
          type: {type}
          <div style={{ margin: "0 10px 0 auto" }}>
            <CRUDTag tag={tag} addTag={addTag} />
          </div>
        </div>
      </Link>

      <div style={{ marginLeft: "30px" }}>
        {childrens && showChilds && (
          <NavTags {...props} tags={childrens} index={id}/>
        )}
      </div>
    </div>
  );
}
// export default React.memo(NavTag);
export default NavTag;