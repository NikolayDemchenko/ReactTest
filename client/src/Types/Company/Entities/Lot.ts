import { Row } from '../Elements/Row';
import { Adress } from './Adress';
import { Product } from './Product';

export class Lot {
  adress: Adress;
  product: Product;
  quantity: Row;
  price: Row;
  details?: Row;
  constructor(product: Product, adress: Adress, quantity: Row, price: Row) {
    this.product = product;
    this.adress = adress;
    this.quantity = quantity;
    this.price = price;
  }
}
