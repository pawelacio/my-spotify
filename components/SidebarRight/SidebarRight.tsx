import { MouseEvent, useState, useEffect } from "react";
import { HiChevronRight } from 'react-icons/hi'
import FriendActivity from "../FriendActivity";

import {
  SidebarRightWrapperStyled,
  HideSidebarButtonStyled,
  SidebarContent
} from './SidebarRightStyled';

const SidebarRight = () => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const anim = setTimeout(() => {
      setOpened(true);
    }, 500)
    return () => {
      clearTimeout(anim);
    }
  }, [])

  const onHideButtonClick = () => {
    setOpened((prevValue) => !prevValue)
  }

  return (
    <SidebarRightWrapperStyled isOpened={opened} >
      <SidebarContent>
        <FriendActivity />
      </SidebarContent>
      <HideSidebarButtonStyled>
        <HiChevronRight onClick={() => onHideButtonClick()} />
      </HideSidebarButtonStyled>
    </SidebarRightWrapperStyled>
  )
}

export default SidebarRight;
