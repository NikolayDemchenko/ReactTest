import { Component } from "react";
import ReactDOM from "react-dom";

// const portalRoot = document.getElementById("portal");

export default class ModalInput extends Component {
    
  // Вызывается после удаления компонента из DOM
  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, false);
  }
  // Вызывается до рендера
  componentWillMount() {
    document.addEventListener("click", this.handleClickOutside, false);
  }

  handleClickOutside(event) {
    // Получаем элемент, на который произведен клик
    const domNode = ReactDOM.findDOMNode(this);

    // Проверяем, что элемент присутствует в переменной,
    // а так же, является ли "domNode" узел потомком "event.target" узла.
    // Если не является, то скрываем элемент.
    if (!domNode || !domNode.contains(event.target)) {
      this.setState({
        visible: false,
      });
    }
  }
  render() {
    return <div></div>;
  }
}
