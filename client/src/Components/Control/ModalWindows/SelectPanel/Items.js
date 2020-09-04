import React, { useState } from "react";
import ReactDOM from "react-dom";
export default function Items(props) {
  let { setItem, allItems, selected, items, close } = props;
  allItems = allItems ? allItems : items;
  const [state, _setState] = useState({ selected, items: items.sort() });

  const search = (item, items, allItems) => {
    // Поиск по подстроке
    const findedAllItems = allItems.filter((_item) => _item.includes(item));    
    const findedItems = items.filter((_item) => _item.includes(item));    
    const listItems = [...new Set([...findedItems, ...findedAllItems])];
    console.log("listItems", listItems);
    const result = findedAllItems.length > 0 ? listItems : items;
    // Сортировка по позиции подстроки
    result.sort((a, b) => a.indexOf(item) - b.indexOf(item));
    return result;
  };

  console.log("state :>> ", state);
  // console.log('allItems :>> ', allItems);
  const setState = (selected) => {
    const _items = search(selected, items, allItems);
    _setState({ items: _items, selected });
  };
  // const setValue = (selected) => {
  //   _setState({ ...state, selected });
  // };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // console.log("handleKeyPress");
      handleClick(e.target.value);
    }
  };
  const handleClick = (selected) => {
    setItem(selected);
    _setState({ ...state, selected });
    // close(null);
    // console.log("handleClick", item);
  };
  const handleChange = ({ target: { value } }) => {
    setState(value);
    console.log("handleChange", value);
  };

  return (
    <div style={{ maxHeight: "90vh", background: "#3459" }}>
      <input
        onKeyPress={handleKeyPress}
        ref={(comp) => comp && ReactDOM.findDOMNode(comp).focus()}
        // value={state.selected}
        onChange={handleChange}
        style={{
          background: "rgba(30,40,57,.9)",
          color: "#fff",
          fontSize: "16px",
          padding: "0 8px",
          // width: "90%",
          outline: "none",
          border: 0,
        }}
      />
      <div
        onKeyPress={handleKeyPress}
        style={{ maxHeight: "90vh", overflowY: "auto", background: "#3459" }}
      >
        {state.items.map((item, index) => (
          <div
            key={index}
            // onMouseDown={() => setValue(item)}
            onClick={(e) => {
              e.stopPropagation();
              handleClick(item);
            }}
            style={{
              background:
                item === state.selected ? "rgb(30,60,97)" : "rgba(30,40,57,.9)",
              padding: "1px 8px",
              margin: "1px 0 0",
              cursor: "pointer",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
