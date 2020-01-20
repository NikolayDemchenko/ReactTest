import React,{useEffect,useState} from "react";
import DeleteButton from "Components/Buttons/DeleteButton/DeleteButton";
import controlStyle from "../../../../../../Styles/ControlStyle.module.css";
import style from "../../Styles/Template.module.css";
import CheckBtn from "../../../../../Buttons/CheckButton/VisibleCheckBtn";

export default ({ checkBtnTrue, onClick, name, changeName }) => {

  const [isVisibleCheckBtn, setVisibleCheckBtn] = useState(false);

  const checkBtnClick = input => {
    if (input.value !== "") {
      changeName(input.value);
      input.blur();
      checkBtnTrue();
      setVisibleCheckBtn(false);
    }
  };
  const keyPressEnter = (event, input) => {
    if (event.key == "Enter") {
      console.log("enter press here! ");
      checkBtnClick(input);
    }
  };

  const inputChange = name => {
    changeName(name);
    name !== "" ? setVisibleCheckBtn(true) : setVisibleCheckBtn(false);
  };
  useEffect(() => {
    if (name == "") {
      input.focus();
    }
  });
  let input;
  return (
    <div className={style.Element}>
      Название элемента :
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
          visible={isVisibleCheckBtn}
          onClick={() => checkBtnClick(input)}
        />
      <DeleteButton onClick={onClick} />
    </div>
  );
};
