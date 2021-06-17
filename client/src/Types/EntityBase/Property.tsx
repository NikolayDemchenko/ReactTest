import React, { FC } from 'react';

export class Property {
	name: string;
	value: string;
	constructor(name: string,value?: string) {
	this.name=name	
	this.value=value||""	
		
	}
	view: FC<{
		setValue? (value:{name:string,value:string}):void;	
		value?: string;
	  }> = ({ setValue }) => {
		return (
		  <div>
			<div>{this.name}</div>
			<input
			  value={this.value}
			  onChange={(e) => {
				setValue && setValue({ name:this.name, value: e.target.value });
			  }}
			/>
		  </div>
		);
	  };
	setValue?: Function;
}




export const PropertyComponent: FC<{
  setValue?: Function;
  name: string;
  value?: string;
}> = ({ name, value = "", setValue }) => {
  return (
    <div>
      <div>{name}</div>
      <input
        value={value}
        onChange={(e) => {
          setValue && setValue({ name, value: e.target.value });
        }}
      />
    </div>
  );
};

export const InstanceProperty: FC<{ name: string; value: string }> = ({
  name,
  value,
}) => {
  return (
    <div>
      <div>{name}</div> <div>{value}</div>
    </div>
  );
};