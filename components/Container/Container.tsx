import { ContainerWrapperStyled } from "./ContainerStyled";
import SidebarLeft from '../SidebarLeft'
import SidebarRight from '../SidebarRight'
import Content from '../Content'


export const Container = () => {
  return (
    <ContainerWrapperStyled>
      <SidebarLeft />
      <Content />
      <SidebarRight />
    </ContainerWrapperStyled>
  )
}

export default Container;