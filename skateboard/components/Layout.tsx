import styled from 'styled-components'
import Sidebar from './Sidebar'

interface ILayoutProps{
   children:React.ReactNode
}

const Container=styled.main`
display: grid;
grid-template-columns:auto 1fr;
`

export default function Layout({children}:ILayoutProps){
    return (
       <Container>
           <Sidebar/>
           {children}
       </Container>        
    )
}