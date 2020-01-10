import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";

export default ({style,item}) => {
  return (

    <div className={style.ColumnGroup}>
      <div className={style.RowGroup}>
        Группа :
        <input defaultValue={item.name} />
        <button>
          <strong>Сохранить</strong>
        </button>
        <button>
          <strong>Удалить</strong>
        </button>
      </div>
      
      {specsSheet.specs.map(spec => {
        return (
          <div key={spec.id}>
            <input className="specs" defaultValue={spec.name} />
          </div>
        );
      })}
    </div>
  );
};
