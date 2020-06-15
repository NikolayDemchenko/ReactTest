import React, { useState, useEffect } from "react";
import SelectPopover from "./SelectPopover";
// Переделать под универсальный вариант
export default function SelectPanel({
  selectedItem,
  startItems,
  allItems,
  setItem,
  button,
}) {
  
  allItems = allItems ? allItems : startItems;

  const setThisItem = (item) => {
    setItem && setItem(item);
  };

  const [items, setItems] = useState(startItems);

  useEffect(() => {
    // _setItem(selectedItem)
    return () => {
      setItems(startItems);
    };
  }, []);
  // console.log('htmlTags :>> ', htmlTags);

  const changeItems = (item) => {
    // Поиск по подстроке
    const findedItems = allItems.filter((_item) => _item.includes(item));
    // Сортировка по позиции подстроки
    findedItems.sort((a, b) => a.indexOf(item) - b.indexOf(item));
    setItems(findedItems.length > 0 ? findedItems : startItems);
  };

  return (
    <SelectPopover
      item={selectedItem}
      items={items}
      setItem={setThisItem}
      changeItem={changeItems}
      button={button}
    />
  );
}
