import shortid from 'shortid';

export type PropsType= { [key: string]: any }
export class Properties {
  private props:PropsType;
  constructor(props: { [key: string]: any }) {
    this.props = props;
  }
  value = () =>
    this.props._id ? { ...this.props, key: this.props._id } : { ...this.props, key: shortid.generate() };
}