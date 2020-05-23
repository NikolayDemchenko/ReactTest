const NavTag = () => {
    function ThisTag({ tag: { type, childrens },index,navigation }) {

      console.log('navigation', navigation)
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
              style={{
                cursor: "default",
                borderBottom: "2px solid #55667766",
                background: "rgba(30,40,57,.4)",
              }}
            >
              {index}{" - "}{type}
            </div>
          </div>
          <div style={{ marginLeft: "30px" }}>
            {childrens && showChilds && <Childrens childrens={childrens} />}
          </div>
        </div>
      );
    }
    
    function Childrens(props) {
      return props.childrens.map((children, index) => {
        return (
          <div style={{ display: "flex" }} key={index}>
            <ThisTag {...props} tag={children} index={index} />
          </div>
        );
      });
    }
    return (
      <Popover
        PaperProps={{
          style: { background: "rgba(43,50,66,.95)" },
        }}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 0, left: 0 }}
      >
        <div style={{ border: "1px dashed #5af" }}>
          <ThisTag {...props} preview={preview} setPreview={setPreview}/>
        </div>
        <VerticalPanel {...props} preview={preview} setPreview={setPreview} />
      </Popover>
    );
  };

  props.setNavigation(NavTag)