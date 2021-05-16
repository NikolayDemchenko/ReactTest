import { List } from '../Elements/List';
import { Row } from '../Elements/Row';

export class Person {
  name: Row;
  fullName?: Row;
  details?: Row;
  contacts: List<Row>;
  constructor(name: Row, contacts: List<Row>) {
    this.name = name;
    this.contacts = contacts;
  }
}
// const person=new Person(new Row("Имя","Васян"),new List<Contact>([]))

// export const testPerson=()=>console.log(`person.name.data`, person.name.data) 
