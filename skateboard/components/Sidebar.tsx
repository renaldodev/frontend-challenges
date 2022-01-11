import Link from "next/link";
import styled from "styled-components";
import { MdDashboard,MdEmail,MdPanTool,MdSettings,MdSearch,MdLiveTv,MdExitToApp,MdPerson, } from "react-icons/md";
import { ComponentType, ReactElement, ReactNode } from "react";

const Container = styled.aside`
  padding: 12px 22px;
  max-height: 100vh;
  padding-top: 0;
  overflow-y: auto;
  

  ::-webkit-scrollbar {
 width: 6px;
 border-radius: 10px;
}

::-webkit-scrollbar-thumb {
 background-color: rgb(21 20 26 / 63%);
 border-radius: 10px;
}
  header{
    padding: 20px;
    margin-bottom: 15px;
   position: sticky;
   top: 0;
   left: 0;
    background: ${(pros) => pros.theme.bgColor};
   
    >a{
      text-decoration: none;
      color: white;
      font-weight: 600;
      font-size: 1.2rem;
    }
  }

  @media (max-width: 810px){
    header a{
      display: none;
    }
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(pros) => pros.theme.borderColor};
  margin-bottom: 15px;
`;

const TitleMenu = styled.div`
  margin-bottom: 5px;
  color: ${(pros) => pros.theme.borderColor};
  @media (max-width:810px){
    
      display: none;
  }
`;


const LinkWrapp=styled.a`
  display: flex;
  color: ${props=>props.theme.borderColor};
  text-decoration: none;
  align-items: center;
  gap:10px;
  > svg{
    width: 32px;
    height: 32px;
  }

  :hover{
    color:white;
  }
  &:not(:last-child){
    margin-bottom: 25px;
  }

  @media (max-width: 810px){
    span{
      display: none;
    }
  }

  `
const MenuWrapp=styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  margin-top: 15px;


`


interface IMenuItemProps {
  children: ReactNode;
  Icon?: ReactNode
  to:string
}


function MenuItem({ children, Icon,to }: IMenuItemProps) {
  return (
    <LinkWrapp href={to}>
      {Icon && Icon}
      <span>{children}</span>
    </LinkWrapp>
  );
}

const menuData=[
  {icon:<MdDashboard/>,text:"Dashboard",to:"#"},
  {icon:<MdEmail/>,text:"Email",to:"#"},
  {icon:<MdPanTool/>,text:"Be bether",to:"#"},
  {icon:<MdSearch/>,text:"Search",to:"#"},
  {icon:<MdSettings/>,text:"Settings",to:"#"},
]

const categoriaData=[
  {icon:<MdLiveTv/>,text:"Livestraem",to:"#"},
  {icon:<MdEmail/>,text:"Tutorial",to:"#"},
  {icon:<MdPanTool/>,text:"Competation",to:"#"},
  {icon:<MdPerson/>,text:"community",to:"#"},
]

export default function Sidebar() {
  return (
    <Container>
      <header>
        <Link href="/">Skestboard</Link>
      </header>
      <TitleMenu>Menu</TitleMenu>
      <MenuWrapp>
        {menuData.map(item=>(
          <MenuItem Icon={item.icon} to={item.to} key={item.text}>
               {item.text}      
          </MenuItem>
        ))}
      </MenuWrapp>
      <Divider/>
      <TitleMenu>Categorias</TitleMenu>
      <MenuWrapp>
        {categoriaData.map(item=>(
          <MenuItem Icon={item.icon} to={item.to} key={item.text}>
               {item.text}      
          </MenuItem>
        ))}
      </MenuWrapp>
      <Divider/>
      <MenuWrapp>
        <MenuItem Icon={<MdExitToApp/>} to="#">
           Exit
        </MenuItem>
      </MenuWrapp>
    </Container>
  );
}
