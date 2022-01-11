import styled from "styled-components";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface ILayoutProps {
  children: React.ReactNode;
}

const Container = styled.main`
  display: grid;
  grid-template-columns: auto 1fr;
`;

const Section =styled.div`
   display: flex;
   flex-direction: column;
`;


export default function Layout({ children }: ILayoutProps) {
  return (
    <Container>
      <Sidebar />
     <Section>
        <Header/>
        {children}
     </Section>
    </Container>
  );
}
