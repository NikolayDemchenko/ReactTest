
import Plus from './Plus'
import controlStyle from '../../../Styles/ControlStyle.module.css'
import IsVisibleHOC from "../../hoc/IsVisibleHOC";
  export default  ({onClick,isVisible}) =>
  IsVisibleHOC(Plus)({
    style: controlStyle.Crud,
    onClick
  })(isVisible);