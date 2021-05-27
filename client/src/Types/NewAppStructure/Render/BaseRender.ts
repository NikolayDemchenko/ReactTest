import React, { createElement } from 'react';

export class Component {
  private type: string;
  private props?: Properties;
  private children?: React.ReactNode[];

  constructor(type: string);
  constructor(type: string, props: Properties);
  constructor(
    type: string,
    props: Properties,
    ...children: React.ReactNode[]
  );
  constructor(
    type: string,
    props?:Properties,
    children?: React.ReactNode[]
  ) {
    this.type = type;
    this.props = props;
    this.children = children;
  }
  //  pages : Pages
  //   updateName() {}
  //   updateDomaine() {}
  //   updateStartPage_id() {}
  render() {
    console.log("Render!!!");
    if (this.children) {
      console.log("Props with Children!!!");
      return createElement(this.type, this.props!.value(), this.children);
    } else if (this.props) {
      console.log("Props!!!");
      return createElement(this.type, this.props.value());
    }else {
      console.log("type!!!");
      return createElement(this.type);
    }
  }
}

export class Properties {
  private props: { [key: string]: any };

  constructor(props: { [key: string]: any }) {
    this.props = props;
  }

  value() {return this.props   
  }
}

const text = new Component("p", new Properties({}), "Некий текст");
const redText = new Component("p",new Properties( { style: { color: "red" } }), [
  "Красный текст",
]);
const div = new Component("div", new Properties({}),[text.render(),redText.render()]);
export const MyComopnent = div.render();
