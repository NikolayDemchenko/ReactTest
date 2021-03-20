import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
export default function Items(props) {
	const { setItem, items, excludedItems, closeAftSelect, close } = props;
	console.log(`items`, items);
	const arrayDiff = (arrA = [], arrB = []) => arrA.filter((el) => !arrB.includes(el));

	const thisItems = arrayDiff(items, excludedItems);
	const [search, setSearch] = useState('');
	const [list, setList] = useState(thisItems);
	const [selected, setSelected] = useState(props.selected);

	useEffect(() => {
		console.log('useEffect in');
		setList(Search(search, thisItems));
		return () => {
			console.log('useEffect out');
		};
	}, [excludedItems]);

	// Поиск по подстроке и сортировка по позиции подстроки
	const Search = (item, items) =>
		items.filter((_item) => _item.includes(item)).sort((a, b) => a.indexOf(item) - b.indexOf(item));

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			// console.log("handleKeyPress");
			// console.log('list.find()', list.find((item) =>item.includes(e.target.value)))
			handleClick(list.find((item) => item.includes(e.target.value)));
		}
	};

	const handleClick = (value) => {
		setItem(value);
		setSelected(value);
		closeAftSelect && close();
	};

	const handleChange = ({ target: { value } }) => {
		setList(Search(value, thisItems));
		setSearch(value);

		console.log('handleChange', value);
	};

	return (
		<div style={{ maxHeight: '90vh', background: '#3459' }}>
			<input
				onKeyPress={handleKeyPress}
				ref={(comp) => comp && ReactDOM.findDOMNode(comp).focus()}
				onChange={handleChange}
				style={{
					background: 'rgba(30,40,57,.9)',
					color: '#fff',
					fontSize: '16px',
					padding: '0 8px',
					// width: "90%",
					outline: 'none',
					border: 0,
				}}
			/>
			<div onKeyPress={handleKeyPress} style={{ maxHeight: '90vh', overflowY: 'auto', background: '#3459' }}>
				{list.map((item, index) => (
					<div
						key={index}
						// onMouseDown={() => setValue(item)}
						onClick={(e) => {
							e.stopPropagation();
							handleClick(item);
						}}
						style={{
							background: item === selected ? 'rgb(30,60,97)' : 'rgba(30,40,57,.9)',
							padding: '1px 8px',
							margin: '1px 0 0',
							cursor: 'pointer',
						}}
					>
						{item}
					</div>
				))}
			</div>
		</div>
	);
}
