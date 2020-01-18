import React, { useState } from "react";
import container from "../../../../../Styles/Container.module.css";
import control from "../../../../../Styles/ControlStyle.module.css";
import Element from "../../../../BaseComponents/BaseInput";
import Add from "../../../../Buttons/PlusButton/TemplateItemPlus";
import Delete from "../../../../Buttons/DeleteButton/DeleteButton";
import { useMutation } from "@apollo/react-hooks";
import { NEW_ELEMENT } from "../../Template/TemplateQueries";
import CheckButton from "../../../../Buttons/CheckButton/IsVisibleCheckBtn";
import SetAddGroup from "../Function/SetAddGroup";
import { useApolloClient } from "@apollo/react-hooks";
export default ({ group, template, changeName }) => {
  const [newElement] = useMutation(NEW_ELEMENT, {
    variables: { template, group }
  });
  const client = useApolloClient();
  const [isVisibleCheckBtn, setVisibleCheckBtn] = useState(false);

  const setGroupName=(input)=>{
    if (input.value !== "") {
      changeName(input.value);
      input.blur();
      SetAddGroup(client, true);
      setVisibleCheckBtn(false);
    }
  }
  const keyPressEnter = (event, input) => {
    if (event.key == "Enter") {
      console.log("enter press here! ");
      setGroupName(input);
    }
  };


  const inputChange = name => {
    changeName(name);
    name !== "" ? setVisibleCheckBtn(true) : setVisibleCheckBtn(false);
  };
  console.log("isVisibleCheckBtn", isVisibleCheckBtn);
  let input;
  return (
    <div key={group.id} className={container.Group}>
      Имя группы :
      <div className={container.FlexRow}>
        <input
          ref={node => {
            input = node;
          }}
          onChange={() => inputChange(input.value)}
          onKeyPress={e => keyPressEnter(e, input)}
          className={control.Input}
          defaultValue={group.name}
        />
        <CheckButton isVisible={isVisibleCheckBtn} onClick={()=>setGroupName(input)}/>
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
