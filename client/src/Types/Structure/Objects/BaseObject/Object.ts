import { Div } from '../../Components/Components';
import {
  InputWithPlaceholderProperty,
} from '../../Properties/BaseProperty/Property';
import { styleSheet } from './Styles';

const object = Div(styleSheet.objectStyle);
object.props.onClick = (e: any) => {
  e.stopPropagation();
  console.log("Нажал на Objekt!!!");
};

export const baseObject = object.render([
  InputWithPlaceholderProperty(
    "Полное наименование организации",
    "Общество с ограниченной ответственностью «Весна»"
  ),
  InputWithPlaceholderProperty(
    "ЮРИДИЧЕСКИЙ АДРЕС",
    "123456, г. Москва, ул. Подвойского, д. 14, стр. 7"
  ),
  InputWithPlaceholderProperty(
    "Почтовый адрес",
    "123456, г. Москва, ул. Подвойского, д. 14, стр. 7"
  ),
  InputWithPlaceholderProperty("ИНН", "7712345678"),
]);
