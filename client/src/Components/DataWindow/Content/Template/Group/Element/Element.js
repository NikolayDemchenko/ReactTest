import React,{useEffect,useState} from "react";
import Delete from "Components/Buttons/Delete/Delete";
import controlStyle from "../../../../../../Styles/ControlStyle.module.css";
import style from "../../Styles/Template.module.css";
import CheckBtn from "../../../../../Buttons/CheckButton/VisibleCheckBtn";
import BtnContainer from '../../../../../Buttons/ButtonsContainer'
export default ({ checkBtnTrue, remove, element, changeName,save }) => {
const{id,name, parentId}=element;
const [checkState, setCheck] = useState(false);

  const checkBtnClick = input => {
    if (input.value !== "") {
      changeName(input.value);
      save({ id, parentId, name: input.value });
      input.blur();
      checkBtnTrue();
      setCheck(false);
    }
  };
  const keyPressEnter = (event, input) => {
    if (event.key === "Enter") {
      console.log("enter press here! ");
      checkBtnClick(input);
    }
  };

  const inputChange = name => {
    changeName(name);
    name !== "" ? setCheck(true) : setCheck(false);
  };
  useEffect(() => {
    if (name === "") {
      input.focus();
    }
  });
  // BtnContainer();
  let input;
  return (
    
      <div className={style.Element}>
      Элемент:
      <input
        placeholder="Введите наименование"
        ref={node => {
          input = node;
        }}
        onKeyPress={e => keyPressEnter(e, input)}
        onChange={() => inputChange(input.value)}
        className={controlStyle.Input}
        defaultValue={name}
      />
        <CheckBtn
          on_off={checkState}
          onClick={() => checkBtnClick(input)}
        />
      <Delete onClick={remove} />
      <BtnContainer/>
    </div>
   
  );
};
