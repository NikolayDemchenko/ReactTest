import React, { useState, useContext } from 'react';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import Icon from 'react-icons-kit';
import { Link } from 'react-scroll';
import { NavTags } from './TagList';
import { tagList as elementList } from '../../../Class/HtmlCss';
import TagCRUDbtn from '../TagCRUDbtn';
import { NavigationContext } from '../../../../AppFunction';

function NavTag(props) {
	const { state } = useContext(NavigationContext);
	const { createTag, removeTag } = state;
	const { node } = props;
	const { tag, id, index } = node;
	const nodes = state.page.nodes.filter(({ parentId }) => parentId === id);
	const [showChilds, setshowChilds] = useState(false);
	// console.log("id :>> ", id);
	// console.log("selectedId :>> ", selectedId);

	const _icon = <Icon size={'100%'} icon={ic_keyboard_arrow_right} />;

	const icon = !showChilds ? <div>{_icon}</div> : <div style={{ transform: 'rotate(90deg)' }}>{_icon}</div>;

	const toggle =
		nodes.length > 0 ? (
			<div
				style={{ cursor: 'pointer', width: '20px' }}
				onClick={(e) => {
					e.stopPropagation();
					setshowChilds(!showChilds);
				}}
			>
				{icon}
			</div>
		) : null;

	let background = 'rgba(30,40,57,.8)';
	let showButtons = false;
	// let showButtons = true;
	if (state.nodeId === id) {
		background = 'rgba(30,60,97,1)';
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
					{toggle}
					tag: {tag} index: {index}
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
									remove: () => removeTag(node.id),
									childrens: state.page.nodes.filter(({ parentId }) => parentId === node.id),
									elementList,
								}}
							/>
						</div>
					)}
				</div>
			</Link>

			<div style={{ marginLeft: '30px' }}>{nodes && showChilds && <NavTags nodes={nodes} index={id} />}</div>
		</div>
	);
}
// export default React.memo(NavTag);
export default NavTag;
