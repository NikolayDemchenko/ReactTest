import React,{useEffect,useState} from "react";
import DeleteButton from "Components/Buttons/DeleteButton/DeleteButton";
import controlStyle from "../../../../../../Styles/ControlStyle.module.css";
import style from "../../Styles/Template.module.css";
import CheckButton from "../../../../../Buttons/CheckButton/IsVisibleCheckBtn";
import { SetAddElement } from "../../Function/SetAdd";
import { useApolloClient } from "@apollo/react-hooks";

export default ({  onClick, name,changeName }) => {
  const client = useApolloClient();
  const [isVisibleCheckBtn, setVisibleCheckBtn] = useState(false);

  const setName = input => {
    if (input.value !== "") {
      changeName(input.value);
      input.blur();
      SetAddElement(client, true);
      setVisibleCheckBtn(false);
    }
  };
  const keyPressEnter = (event, input) => {
    if (event.key == "Enter") {
      console.log("enter press here! ");
      setName(input);
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
        <CheckButton
          isVisible={isVisibleCheckBtn}
          onClick={() => setName(input)}
        />
      <DeleteButton onClick={onClick} />
    </div>
  );
};
