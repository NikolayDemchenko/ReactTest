import React, { FC, useContext, ReactElement } from 'react';
import StylePanel from './StylePanel/StylePanel';
import { Link } from 'react-scroll';
import { log, funcLog } from '../../../Log';
import jss, { JssStyle } from 'jss';
import preset from 'jss-preset-default';
import SelectPanel from '../Inputs/ModalInput/SelectPanel/SelectPanel';
import { htmlTags } from '../../Class/HtmlCss';
import BackSettings from './BackSettings';
import { IAttributesPanel } from '../../../Types/IProps';

const AttributesPanel: FC<IAttributesPanel> = ({ setPage, page, selectedId, updateTag }) => {
	//    console.log(
	//     "%cVerticalPanel-App",
	//     'color: green');

	const node = page.nodes.find(({ id }) => selectedId === id);
	const nodeStyle = node && page.styles.find(({ id }) => id === node.styleId);

	const style: JssStyle = {
		flexWrap: 'wrap',
		maxHeight: '95vh',
		minWidth: '280px',
		maxWidth: '280px',
		position: 'fixed',
		top: 0,
		right: 0,
		zIndex: 999,
		backgroundColor: '#456c',
		color: 'rgba(140, 200, 255, 0.8)',
		boxShadow: '2px 10px 5px 2px #00000055',
		'&::-webkit-scrollbar': { width: '4px' },
		'&::-webkit-scrollbar-thumb': { backgroundColor: '#567' },
	};
	jss.setup(preset());
	const { classes } = jss.createStyleSheet({ style }).attach();
	return (
		<>
			{node && nodeStyle && (
				<div className={classes.style}>
					<BackSettings {...{ setPage, page }} />
					<div style={{ cursor: 'default', display: 'flex' }}>
						<Link activeClass="active" to={node.id} spy={true} smooth={true} offset={-70} duration={500}>
							<div
								title={node.id}
								style={{
									display: 'inline-flex',
									height: '1.5em',
									padding: '0px 0.5em',
									overflow: 'hidden',
								}}
							>
								node.id: {node.id}
							</div>
						</Link>
						<div
							style={{
								padding: '0px 0.5em',
							}}
						>
							tag:
						</div>
						<SelectPanel
							selected={node.tag}
							items={htmlTags}
							setItem={(tag: object) => updateTag(node.id, 'tag', tag)}
						/>
						<div
							style={{
								display: 'flex',
								marginLeft: 'auto',
							}}
						></div>
					</div>
					<Link activeClass="active" to={node.id} spy={true} smooth={true} offset={-70} duration={500}>
						<StylePanel {...{ node, setPage, page, nodeStyle, updateTag }} />
					</Link>
					<div style={{ paddingBottom: '4em' }} />
				</div>
			)}
		</>
	);
};

// function areEqual(prevProps, nextProps) {
//   return prevProps === nextProps;
// }

export default AttributesPanel;
// export default log<IAttributesPanel>(AttributesPanel);
