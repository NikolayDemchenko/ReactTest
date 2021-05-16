import { List } from '../Elements/List';
import { Row } from '../Elements/Row';
import { CompanyDetails } from './CompanyDetails';
import { Employee } from './Employee';
import { Lot } from './Lot';

export class Company {
    name:Row
    contacts:List<Row>
    remark?:Row
    details?:CompanyDetails
    products?:List<Lot>
    material?:List<Lot>
    employees?:List<Employee>
    constructor(name: Row, contacts:List<Row>) {
      this.name=name      
      this.contacts=contacts      
    }
  }

  const company=new Company(new Row("Наименование","Проект Инвест"),new List<Row>([new Row("Телефон","+7(950)766-79-91")]))
  export const compTest=()=>{
      console.log(`company.contacts.list`, company.contacts.list[0].data)
  }
  