import React from 'react'
import style from './Filter.module.css'
const Filter = (props) => {
    const GetItems = (itemName, itemClassName, quantity) => {
        const items = [];
        for (let i = 0; i < quantity; i++) {
          items.push(
            <div className={itemClassName}>
              <div className="Name">{itemName}</div>
            </div>
          );
        }
        return items;
      };
      const FilterItems = GetItems("Фильтр ", "Item", props.data);
    return (
        <div className={style.Filter}>{FilterItems}    
        </div>
    )
}
export default Filter
