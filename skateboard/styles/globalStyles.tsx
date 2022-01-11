import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap");
  *{
    margin: 0;
    padding: 0;
    transition: all 700ms linear;
  }
  html,body{

  }
  body{
    background: ${(props) => props.theme.bgColor};
    font-family:  ${(props) => props.theme.font};
  } 

`;
