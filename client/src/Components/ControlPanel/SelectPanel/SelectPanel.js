import React, { useState, useEffect } from "react";
import SelectPopover from "./SelectPopover";
// Переделать под универсальный вариант
export default function SelectPanel({
  selectedItem,
  items,
  allItems,
  setItem,
  button,
}) {
  
  allItems = allItems ? allItems : startItems;

  const setThisItem = (item) => {
    setItem && setItem(item);
  };

  const [_items, _setItems] = useState(items);

  useEffect(() => {
    // _setItem(selectedItem)
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

      item={selectedItem}
      items={items}

      item={item}
      items={_items}

      setItem={setThisItem}
      changeItem={changeItems}
      button={button}
    />
  );
}
