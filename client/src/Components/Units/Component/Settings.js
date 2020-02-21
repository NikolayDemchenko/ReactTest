import React from 'react'
import Select from './Select'
import { ButtonsContainer, CrudButton } from "../../Buttons/ButtonsContainer";
export default function Settings({type,bColor,color,visible,remove,check,style}) {
  return (
    <div>
      <Select onClick={type.click}/>
      <ButtonsContainer
          containerStyle={style.Container}
          buttonStyle={style}
          BackColor={{
            onClick: bColor.click,
            state: "active"
          }}
          Color={{
            onClick: color.click,
            state: "active"
          }}
          Visible={{
            onClick: visible.click,
            state:visible.value===true?"on":"active"
          }}
          Delete={{
            onClick: remove.click,
            state:"active"
          }}
          Check={{
            onClick: check.click,
            state:"active"
          }}
        />
      );
    </div>
  )
}
