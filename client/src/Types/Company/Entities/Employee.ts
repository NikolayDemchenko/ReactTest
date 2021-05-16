import { Row } from '../Elements/Row';
import { Person } from './Person';

export class Employee {
    person:Person
    post:Row
  constructor(person: Person, post:Row) {
    this.person = person;
    this.post = post;
  }
}