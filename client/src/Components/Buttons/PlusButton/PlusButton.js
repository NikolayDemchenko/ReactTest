import React from "react";
import {u2795} from 'react-icons-kit/noto_emoji_regular/u2795'
import Button from "Components/Buttons/Button";
import {plus} from 'react-icons-kit/feather/plus'
import {folderPlus} from 'react-icons-kit/feather/folderPlus'
export default ({style,onClick}) => {
  return <Button style={style} onClick={onClick} size={"35%"} icon={folderPlus} />;
};
