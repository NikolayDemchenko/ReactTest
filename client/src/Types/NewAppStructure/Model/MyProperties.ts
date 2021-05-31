import shortid from 'shortid';
import { IMyProperties, MyPropertiesType as MyPropertiesType } from './ValuesInterfacesAndTypes';

export class MyProperties implements IMyProperties{
  private properties:MyPropertiesType;
  constructor(properties: MyPropertiesType) {
    this.properties = properties;
  }
  updateProperty(key:string,value:any): void {
    this.properties[key]=value
  }
  removeProperty(key: string): void {
    delete this.properties[key];
  }
  value = () =>
    this.properties._id ? { ...this.properties, key: this.properties._id } : { ...this.properties, key: shortid.generate() };
}