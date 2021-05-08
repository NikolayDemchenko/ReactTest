import { Div } from '../../Components/ContainerComponents';
import { InputWithPlaceholder } from '../../Components/InputComponents';
import { Span } from '../../Components/TextComponents';
import { createProperty } from '../CreateProperty';
import { styleSheet } from './Styles';

const div = Div(styleSheet.propertyStyle);
// div.props.onClick = (e: any) => {
//   e.stopPropagation();
//   console.log("Нажал на Property!!!", e.target.textContent);
// };

const span = Span( styleSheet.valueStyle);
const input = InputWithPlaceholder(styleSheet.keyStyle);


export const InputWithPlaceholderProperty = createProperty(div, span, input);
