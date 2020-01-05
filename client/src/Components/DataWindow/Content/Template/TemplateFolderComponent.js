import React from 'react'
export default ({name,style})=>{
  return (
    <div className={style.TemplateItem}>
      <input
        placeholder="Введите наименование"
        className={style.Input}
        defaultValue={name}
      />
    </div>
  );
}