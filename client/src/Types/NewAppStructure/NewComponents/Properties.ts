import shortid from 'shortid';

export type PropsType= { [key: string]: any }
export class Properties {
  private props:PropsType;
  constructor(props: PropsType) {
    this.props = props;
  }
  value = () =>
    this.props._id ? { ...this.props, key: this.props._id } : { ...this.props, key: shortid.generate() };
}