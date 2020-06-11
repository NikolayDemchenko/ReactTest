import React, { useState, useEffect } from "react";
import htmlTags from "html-tags";
import { htmlTags as reservHtmlTags } from "../../Class/HtmlCss";
import SelectPanel from "../SelectPanel";

export default function PopupTagList(props) {
  const reservTags = reservHtmlTags.map((item) => item.value);
  const [tag, setTag] = useState(props.tag);
  const [tags, setTags] = useState(reservTags);

  useEffect(() => {
    return () => {
      setTags(reservTags);
    };
  }, []);
  // console.log('htmlTags :>> ', htmlTags);

  const changeTag = (item) => {
    // Поиск тегов по подстроке
    const findedTags = htmlTags.filter((tag) => tag.includes(item));
    // Сортировка по позиции подстроки
    findedTags.sort((a, b) => a.indexOf(item) - b.indexOf(item));
    setTags(findedTags.length > 0 ? findedTags : reservTags);
  };

  return (
    <SelectPanel
      item={tag}
      items={tags}
      setItem={setTag}
      changeItem={changeTag}
    />
  );
}
