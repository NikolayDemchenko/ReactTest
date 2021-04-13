import React, { FC } from 'react';

// import { log, funcLog } from '../../../Log';
import jss from 'jss';
import preset from 'jss-preset-default';
import { Link } from 'react-scroll';

import { TJssStyle } from '../../../Types/BaseTypes';
import { IFCAttributesPanel } from '../../../Types/IProps';
import {
  StyleToKeyValueTree,
  StyleView,
} from '../../../Types/TreeView/StyleView/StyleView';
import { htmlTags } from '../../Class/HtmlCss';
import SelectPanel from '../Inputs/ModalInput/SelectPanel/SelectPanel';
import BackSettings from './BackSettings';
import StylePanel from './StylePanel/StylePanel';

const AttributesPanel: FC<IFCAttributesPanel> = ({
  setPage,
  page,
  node,
  nodeManager,
  assignStyleId,
  setAssignStyleId,
}) => {
  console.log("%cAttributesPanel", "color: #059");
  const nodeStyle = page.styles.find(({ id }) => id === node.styleId);

  const style: TJssStyle = {
    flexWrap: "wrap",
    maxHeight: "95vh",
    minWidth: "280px",
    maxWidth: "280px",
    position: "fixed",
    overflow: "auto",
    top: 0,
    right: 0,
    zIndex: 999,
    backgroundColor: "#456c",
    color: "rgba(140, 200, 255, 0.8)",
    boxShadow: "2px 10px 5px 2px #00000055",
    "&::-webkit-scrollbar": { width: "4px" },
    "&::-webkit-scrollbar-thumb": { backgroundColor: "#567" },
  };
  jss.setup(preset());
  const { classes } = jss.createStyleSheet({ style }).attach();
  return (
    <>
      (
      <div className={classes.style}>
        <BackSettings {...{ setPage, page }} />
        <div style={{ cursor: "default", display: "flex" }}>
          <Link
            activeClass="active"
            to={node.id}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div
              title={node.id}
              style={{
                display: "inline-flex",
                height: "1.5em",
                padding: "0px 0.5em",
                overflow: "hidden",
              }}
            >
              node.id: {node.id}
            </div>
          </Link>
          <div
            style={{
              padding: "0px 0.5em",
            }}
          >
            tag:
          </div>
          <SelectPanel
            selected={node.tag}
            items={htmlTags}
            setItem={(tag: object) =>
              nodeManager.updateNode(node.id, "tag", tag)
            }
          />
          <div
            style={{
              display: "flex",
              marginLeft: "auto",
            }}
          ></div>
        </div>
        <Link
          activeClass="active"
          to={node.id}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {nodeStyle && (
            <StylePanel
              {...{
                node,
                setPage,
                page,
                nodeStyle,
                nodeManager,
                assignStyleId,
                setAssignStyleId,
              }}
            />
          )}
          <StyleView
            {...{
              list: StyleToKeyValueTree(nodeStyle!.data),
              setList: (data: any) => {
                console.log(JSON.stringify(data));
              },
            }}
          />
        </Link>
        <div style={{ paddingBottom: "4em" }} />
      </div>
      )
    </>
  );
};

// function areEqual(prevProps, nextProps) {
//   return prevProps === nextProps;
// }

export default AttributesPanel;
// export default log<IAttributesPanel>(AttributesPanel);
