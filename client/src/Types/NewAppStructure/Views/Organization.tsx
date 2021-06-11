import React, {
  FC,
  JSXElementConstructor,
  ReactElement,
  useState,
} from 'react';

export const Contacts: FC = () => {
  return (
    <Table>
      <NamedInput>Имя</NamedInput>
      <NamedInput>Полное имя</NamedInput>
      <NamedInput>Телефон</NamedInput>
      <NamedInput>Адрес</NamedInput>
    </Table>
  );
};

export const Table: FC = ({ children }) => {
  const [object, setobject] = useState<{ [key: string]: string }>({});
  console.log(`table`, object);
  return (
    <>
      <Form {...{ setobject }}>{children}</Form>
    </>
  );
};



export const Form: FC<{
  setobject: (
    value: React.SetStateAction<{
      [key: string]: string;
    }>
  ) => void;
}> = ({ setobject, children }) => {
  const setValue = (property: { key: string; value: string }) => {
    setobject((object) => {
      const _object = { ...object };
      _object[property.key] = property.value;
      return { ..._object };
    });
  };
  return (
    <>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(
          child as ReactElement<any, string | JSXElementConstructor<any>>,
          { setValue }
        );
      })}
    </>
  );
};


export const NamedInput: FC<{ setValue?: Function }> = ({
  setValue,
  children,
}) => {
  return (
    <div>
      {children}
      <input
        onChange={(e) => {
          setValue && setValue({ key: children, value: e.target.value });
        }}
      />
    </div>
  );
};
