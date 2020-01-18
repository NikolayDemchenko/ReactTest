import React from "react";
import container from "../../../../../Styles/Container.module.css";
import control from "../../../../../Styles/ControlStyle.module.css";
import Element from "../../../../BaseComponents/BaseInput";
import Add from "../../../../Buttons/PlusButton/TemplateItemPlus";
import Delete from "../../../../Buttons/DeleteButton/DeleteButton";
import { useMutation } from "@apollo/react-hooks";
import { NEW_ELEMENT} from "../../Template/TemplateQueries";

export default ({ group, template,changeName }) => {
  const [newElement] = useMutation(NEW_ELEMENT, {
    variables: { template, group }
  });

  const keyPressEnter = (event,input) => {
    if(event.key == 'Enter'){
      console.log('enter press here! ')
      if(input.value!==""){
      changeName(input.value)
      input.blur()}
    }
  }

  let input;
  return (
    <div key={group.id} className={container.Group}>
      Имя группы :
      <div className={container.FlexRow}>
        <input         
          ref={node => {
            input = node;
          }}
          onKeyPress={e=>keyPressEnter(e,input)}
          className={control.Input}
          defaultValue={group.name}
        />
        <Delete />
      </div>
      <div className={container.FlexRow}>
        <Add
          onClick={e => {
            e.preventDefault();
            newElement();
          }}
          isVisible={!group.elements.find(item => item.name == "")}
        />
      </div>
      {group.elements.map(el => {
        return (
          <div key={el.id}>
            <Element name={el.name} style={container.BaseName} onClick={null} />
          </div>
        );
      })}
    </div>
  );
};
