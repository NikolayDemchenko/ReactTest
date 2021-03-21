export default function DataTypeRecognizer({
	value,
	func,
	funcTemplate,
}: {
	value: string;
	func?: boolean;
	funcTemplate?: RegExp;
}) {
	// console.log("typeof value :>> ", typeof value);
	let funcTempl = funcTemplate ? funcTemplate : /^(?!^rgba|^rgb|\(.*\)|\d|@|\W|\w+\(-*\w+\)).*\(.*\).*$/gm;

	if (value) {
		if (value.match(funcTempl) && !func) {
			return 'func';
		} else {
			// Если есть пробел, то мультиинпут
			if (value.match(/^(?!@).*\s/gm)) {
				return 'multi';
			} else {
				// Если есть обозначение цвета
				if (value.match(/^#\w+|^rgba|^rgb/gm)) {
					return 'color';
					// Если есть цифры
				} else if (value.match(/^\d+|^-\d+/gm)) {
					return 'number';
				} else {
					return 'string';
				}
			}
		}
	} else {
		return 'string';
	}
}
