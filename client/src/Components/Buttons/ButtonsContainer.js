import {Check,Plus,Delete,Undo,Save}   from './AllButtons'
import ActiveButton from './ActiveButton'
import React from 'react'
const buttons =[Check,Plus,Delete,Undo,Save];
export default function ButtonsContainer() {
  let btns=[];
  for (var prop in buttons){
    let Btn={...buttons[prop]({onClick:null,on_off:true})}
    // btn.key=prop
    btns.push(Btn)
  //  btns.forEach(item=>item.key=prop)
    console.log(Btn)
  }
  return (
    <div>
      {btns}
    </div>
  )
}
