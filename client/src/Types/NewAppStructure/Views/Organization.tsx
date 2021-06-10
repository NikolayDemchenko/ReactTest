import React, { FC } from 'react';

export const Organization: FC = () => {
	return (
		<Table>
			<NamedInput>Наименование организации</NamedInput>
			<NamedInput>Наименование организации</NamedInput>
			<NamedInput>Наименование организации</NamedInput>
			<NamedInput>Наименование организации</NamedInput>
			<NamedInput>Наименование организации</NamedInput>
		</Table>
	);
};
export const Table: FC = ({ children }) => {
	return <>{children}</>;
};
export const NamedInput: FC = ({ children }) => {
	return <>{children}</>;
};
