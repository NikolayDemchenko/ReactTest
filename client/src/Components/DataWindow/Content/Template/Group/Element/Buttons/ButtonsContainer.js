import React,{useEffect,useState} from "react";
import Delete from "Components/Buttons/Delete/Delete";
import controlStyle from "../../../../../../Styles/ControlStyle.module.css";
import style from "../../Styles/Template.module.css";
import CheckBtn from "../../../../../../Buttons/CheckButton/VisibleCheckBtn";

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
  let input;
  return (    
      <div className={style.Element}>
             <CheckBtn
          on_off={checkState}
          onClick={() => checkBtnClick(input)}
        />
      <Delete onClick={remove} />
    </div>
   
  );
};
