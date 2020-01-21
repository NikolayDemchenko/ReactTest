import CheckButton from './Check'
import controlStyle from '../../../Styles/ControlStyle.module.css'
import IsVisibleHOC from "../../hoc/IsVisibleHOC";
  export default  ({onClick,visible}) =>
  IsVisibleHOC(CheckButton)({
    style: controlStyle.Crud,
    onClick
  })(visible);