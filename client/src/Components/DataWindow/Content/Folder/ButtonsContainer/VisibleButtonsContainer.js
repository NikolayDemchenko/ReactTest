import Buttons from "./ButtonsContainer";
import controlStyle from "../../../../../Styles/ControlStyle.module.css";
import IsVisibleHOC from "../../../../hoc/IsVisibleHOC";
export default ({tempVisible,setVisible, newFolder, newTemplate, visible }) => {
  
  return IsVisibleHOC(Buttons)({
    style: controlStyle.Crud,   
    newFolder,
    newTemplate,
    setVisible,
    tempVisible
  })(visible);
};
