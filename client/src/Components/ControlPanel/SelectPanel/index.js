import React, { useState, useEffect } from "react";
import SelectPopover from "./SelectPopover";
// Переделать под универсальный вариант
export default function PopupTagList({
  selectedItem,
  items,
  allItems,
  setItem,
}) {
  allItems = allItems ? allItems : items;
  const [item, _setItem] = useState(selectedItem);
  const setThisItem = (item) => {
    _setItem(item);
    setItem && setItem(item);
  };

  const [_items, _setItems] = useState(items);

  useEffect(() => {
    return () => {
      _setItems(items);
    };
  }, []);
  // console.log('htmlTags :>> ', htmlTags);

  const changeItems = (item) => {
    // Поиск по подстроке
    const findedItems = allItems.filter((_item) => _item.includes(item));
    // Сортировка по позиции подстроки
    findedItems.sort((a, b) => a.indexOf(item) - b.indexOf(item));
    _setItems(findedItems.length > 0 ? findedItems : items);
  };

  return (
    <SelectPopover
      item={item}
      items={_items}
      setItem={setThisItem}
      changeItem={changeItems}
    />
  );
}
