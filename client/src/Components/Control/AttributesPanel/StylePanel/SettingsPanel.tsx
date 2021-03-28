import React, { FC, useContext } from 'react';
import Icon from 'react-icons-kit';
import { buttonStyle } from '../../Styles/BtnStyle';
import { copy } from 'react-icons-kit/icomoon/copy';
import { exportIcon } from 'react-icons-kit/entypo/exportIcon';
import { SaveToJSON } from '../../../../AppFunction';
import { paintBrush } from 'react-icons-kit/fa/paintBrush';
import { book } from 'react-icons-kit/fa/book';
import { folderDownload } from 'react-icons-kit/icomoon/folderDownload';
import { boxRemove } from 'react-icons-kit/icomoon/boxRemove';
import SelectPanel from '../../Inputs/ModalInput/SelectPanel/SelectPanel';
import Styles from '../JSON/Styles.json';
import PopupInput from '../../Inputs/ModalInput/PopupInput/PopupInput';
import { Context } from '../../../../AppFunction';
import { IFCSettingsPanel } from '../../../../Types/IProps';
const SettingsPanel: FC<IFCSettingsPanel> = (props) => {
	console.log('SettingsPanel :>> ');
	const {
		page,
		updateNode,
		node,
		cloneStyle,
		updateStyleName,
		updateStyleData,
		nodeStyle,
		setAssignStyleId,
		assignStyleId,
	} = props;

	// console.log("props", props);
	// console.log("Styles", Styles);

	// console.log('assignStyleId :>> ', assignStyleId);
	const setLibrStyleByName = (name: string) => {
		const style = Styles.find((style) => style.name === name);
		style && updateStyleData(style.data);
	};
	const changeNodeStyle = (styleName: string) => {
		const style = page.styles.find((style) => style.name === styleName);
		style && updateNode(node.id, 'styleId', style.id);
	};

	return (
		<div
			title={'свойства стиля'}
			style={{
				// display: "flex",
				borderTop: '4px solid ',
				// borderColor:  'rgba(140, 200, 255, 0.4)',
				cursor: 'default',
				paddingLeft: '0.5em',
			}}
		>
			<div
				style={{
					display: 'flex',
				}}
			>
				<div
					style={{
						display: 'flex',
						overflow: 'hidden',
						height: '26px',
						width: '100%',
						// border: "1px solid white",
					}}
					title={'имя стиля'}
				>
					<PopupInput dataType={'string'} value={nodeStyle.name} setValue={updateStyleName} />
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
					}}
				>
					<div
						title={'Новый стиль'}
						className={buttonStyle}
						onClick={(e) => {
							e.stopPropagation();
							console.log('Новый стиль!', nodeStyle.data);
							cloneStyle();
						}}
					>
						<Icon size={'100%'} icon={copy} />
					</div>
					<SelectPanel
						items={page.styles.map((style) => style.name)}
						selected={nodeStyle.name}				
						setItem={changeNodeStyle}
						button={
							<div title={'Выбрать стиль тега'} className={buttonStyle}>
								<Icon size={'100%'} icon={folderDownload} />
							</div>
						}
					/>
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					width: '100%',
					justifyContent: 'flex-end',
				}}
			>
				<SelectPanel
					items={Styles.map((style) => style.name)}
					setItem={setLibrStyleByName}
					button={
						<div title={'Библиотека стилей'} className={buttonStyle}>
							<Icon size={'100%'} icon={book} />
						</div>
					}
				/>
				<div
					title={'Назначить стиль'}
					className={buttonStyle}
					style={{ color: assignStyleId && '#ffa' }}
					onClick={(e) => {
						e.stopPropagation();
						setAssignStyleId(node.styleId);
						console.log('Назначить стиль!');
					}}
				>
					<Icon size={'100%'} icon={paintBrush} />
				</div>

				<div
					title={'Копировать в буфер'}
					// style={btnStyle}
					className={buttonStyle}
					onClick={(e) => {
						e.stopPropagation();
						window.navigator.clipboard.writeText(JSON.stringify({ name: '', panelStyle: nodeStyle.data }));
					}}
				>
					<Icon size={'100%'} icon={boxRemove} />
				</div>
				<div
					title={'Экспортировать стиль'}
					// style={btnStyle}
					className={buttonStyle}
					// Сохранение файлов
					onClick={(e) => {
						e.stopPropagation();
						SaveToJSON(nodeStyle.data);
					}}
				>
					<Icon size={'100%'} icon={exportIcon} />
				</div>
			</div>
		</div>
	);
};
export default SettingsPanel;
