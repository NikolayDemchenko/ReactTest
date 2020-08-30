import React, { useState } from "react";
import ReactDOM from "react-dom";
export default function Items(props) {
  let { setItem, allItems, selectedItem: value, items, close } = props;
  allItems = allItems ? allItems : items;
  const [state, _setState] = useState({ value, items: items.sort() });

  const search = (item, items, allItems) => {
    // Поиск по подстроке
    const findedAllItems = allItems.filter((_item) => _item.includes(item));
    // Сортировка по позиции подстроки
    findedAllItems.sort((a, b) => a.indexOf(item) - b.indexOf(item));
    const findedItems = items.filter((_item) => _item.includes(item));
    findedItems.sort((a, b) => a.indexOf(item) - b.indexOf(item));
    const listItems = [...new Set([...findedItems, ...findedAllItems])];
    console.log("listItems", listItems);

    const result = findedAllItems.length > 0 ? listItems : items;

    const upItems = allItems.map(
      (_item, index) => index > allItems.indexOf(item) && _item
    ).filter((el)=>el!==false);
    const downItems = allItems.map(
      (_item, index) => index < allItems.indexOf(item) && _item
    ).filter((el)=>el!==false);
    // const downItems = allItems.splice(allItems.indexOf(item), 3);

    console.log("upItems :>> ", upItems);
    console.log("downItems :>> ", downItems);
    return result;
  };

  console.log("state :>> ", state);
  // console.log('allItems :>> ', allItems);
  const setState = (value) => {
    const _items = search(value, items, allItems).sort();
    _setState({ items: _items, value });
  };
  const setValue = (value) => {
    _setState({ ...state, value });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // console.log("handleKeyPress");
      handleClick(e.target.value);
    }
  };
  const handleClick = (item) => {
    setItem(item);
    setState(item);
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
        value={state.value}
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
            onMouseDown={() => setValue(item)}
            onClick={(e) => {
              e.stopPropagation();
              handleClick(item);
            }}
            style={{
              background: "rgba(30,40,57,.9)",
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
