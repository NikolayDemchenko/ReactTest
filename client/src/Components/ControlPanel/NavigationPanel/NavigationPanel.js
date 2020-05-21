import React from "react";

function NavigationPanel(props) {
  // Отобразить тип тега
  // Если у тега есть чилдрены перебрать чилдрены и вывести их тип
  function Tag({ tag: { type, childrens } }) {
    const sign=childrens?'+':null
    return (
      <div>
        {sign}{type}
        <div style={{ marginLeft: "15px" }}>
          {childrens && <Childrens childrens={childrens} />}
        </div>
      </div>
    );
  }

  function Childrens(props) {
    return props.childrens.map((children, index) => {
      return (
        <div key={index}>
          <Tag {...props} tag={children} />
        </div>
      );
    });
  }

  console.log("props.tag", props.tag);

  return <Tag {...props} />;
}

export default NavigationPanel;
