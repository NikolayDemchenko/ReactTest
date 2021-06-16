import React, { FC } from 'react';

export class Property {
	name: string;
	constructor(name: string) {
	this.name=name	
		
	}
	view: FC<{
		setValue? (value:{name:string,value:string}):void;	
		value?: string;
	  }> = ({ value = "", setValue }) => {
		return (
		  <div>
			<div>{this.name}</div>
			<input
			  value={value}
			  onChange={(e) => {
				setValue && setValue({ name:this.name, value: e.target.value });
			  }}
			/>
		  </div>
		);
	  };
	value?: string;
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