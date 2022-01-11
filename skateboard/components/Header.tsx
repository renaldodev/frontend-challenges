import { MdChevronLeft, MdNotifications, MdSearch } from "react-icons/md";
import styled from "styled-components";

interface IHeaderProps {
  children?: React.ReactNode;
}

const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 30px 35px;
  
  position: sticky;
  top: 0;
  left: 0;
  justify-content: space-between;

  .input {
    flex: 0.4;
  }
  .input .search-wrapper {
    display: flex;
    gap: 2px;
    background: ${(props) => props.theme.borderColor};
    align-items: center;
    padding: 2px 12px;
    border-radius: 5px;
    justify-content: space-between;
  }

  .input .search-wrapper input {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    outline: none;
    height: 32px;
    background: none;
    border: none;
    color: white;
    flex-grow: 1;
  }

  .input .search-wrapper svg {
    fill: ${(props) => props.theme.bodyColor};
    width: 22px;
    height: 22px;
  }

  .profile-wrapper {
    display: flex;
    align-items: center;
  }

  .profile-wrapper .profile {
    display: flex;
    gap: 5px;
    align-items: center;
  }
  .profile-wrapper .profile .avatar {
    height: 34px;
    width: 34px;
    border-radius: 50%;
    background: green;
    display: flex;
    justify-content: center;
    align-items: center;

    > span {
      color: white;
    }
  }

  .profile-wrapper .profile span {
    color: white;
   
  }

  @media(max-width: 810px){
     padding: 8px 10px;
    .profile-wrapper .profile span:not(:first-child), .profile-wrapper .profile svg {
        display: none;
        
    }
    }

  .profile-wrapper .profile svg{
    color: white;
  }

  .notification {
    position: relative;

    &::before {
      content: " ";
      position: absolute;
      width: 6px;
      height:6px;
      right: 5px;
      top: 5px;
      background: red;
      border-radius: 3px;
      z-index: 5;


      display: block;
    }
  }
  .notification svg {
    position: relative;
    fill: ${(props) => props.theme.bodyColor};
    width: 24px;
    height: 24px;
    ::after {
    }
}

@media(max-width: 810px){
        
        .notification{
            display: none;
        }
        

    }

`;

export default function Header({ children }: IHeaderProps) {
  return (
    <Container>
      <div className="input">
        <div className="search-wrapper">
          <input type="search" placeholder="Search..." />
          <MdSearch />
        </div>
      </div>
      <div className="profile-wrapper">
        <div className="profile">
          <div className="avatar">
            <span>R</span>
          </div>
          <span>Renaldo</span>
          <MdChevronLeft />
        </div>
        <div className="notification">
          <MdNotifications />
        </div>
      </div>
    </Container>
  );
}
