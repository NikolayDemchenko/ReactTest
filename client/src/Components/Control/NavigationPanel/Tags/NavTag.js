import React, { useState } from 'react';
import Icon from 'react-icons-kit';
import { Link } from 'react-scroll';
import { NavTags } from './TagList';
import { tagList as elementList } from '../../../Class/HtmlCss';
import TagCRUDbtn from '../TagCRUDbtn';
import { log, funcLog } from '../../../../Log';
import RotatingArrow from '../RotatingArrow'
function NavTag(props) {
	const { createTag, removeTag, node, state } = props;
	const { tag, id, index } = node;
	const nodes = state.page.nodes.filter(({ parentId }) => parentId === id);
	const [show, setShow] = useState(false);

	// console.log("selectedId :>> ", selectedId);
	const toggle =
		nodes.length > 0 ? (
			<div
				style={{ cursor: 'pointer', width: '20px' }}
				onClick={(e) => {
					e.stopPropagation();
					setShow(!show);
				}}
			>
				<RotatingArrow {...{show}}/>		
			</div>
		) : (
			<div style={{ width: '20px' }} />
		);

	let background = 'rgba(30,40,57,.8)';
	let showButtons = false;

	if (state.nodeId === id) {
		background = 'rgb(30,40,57)';
		showButtons = true;
	}

	return (
		<div>
			<Link activeClass="active" to={id} spy={true} smooth={true} offset={-70} duration={500}>
				<div
					onClick={(e) => {
						e.preventDefault();
						console.log('id :>> ', id);
						document.getElementById(id).click();
					}}
					style={{
						display: 'flex',
						borderBottom: '2px solid #55667766',
						background,
						cursor: 'default',
						// outline: "1px solid white",
					}}
				>
					{toggle} {tag} {index}
					{showButtons && (
						<div
							style={{
								//  outline: "1px solid white",
								margin: '0 4px 4px auto',
							}}
						>
							<TagCRUDbtn
								{...{
									parent: node,
									create: createTag,
									remove: () => removeTag(id),
									childrens: state.page.nodes.filter(({ parentId }) => parentId === id),
									elementList,
								}}
							/>
						</div>
					)}
				</div>
			</Link>

			<div style={{ marginLeft: '15px' }}>{nodes && show && <NavTags {...{ ...props, nodes }} />}</div>
		</div>
	);
}
// export default React.memo(log(NavTag));
export default log(NavTag);
