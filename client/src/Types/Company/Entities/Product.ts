import { Row } from '../Elements/Row';

export class Product {
  name: Row;
  details?: Row;
  constructor(name: Row, details?: Row) {
    this.name = name;
    this.details = details;
  }
}
