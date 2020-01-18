import CheckButton from './CheckButton'
import controlStyle from '../../../Styles/ControlStyle.module.css'
import IsVisibleHOC from "../../hoc/IsVisibleHOC";
  export default  ({onClick,isVisible}) =>
  IsVisibleHOC(CheckButton)({
    style: controlStyle.Crud,
    onClick
  })(isVisible);