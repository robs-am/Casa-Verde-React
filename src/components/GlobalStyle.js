import { createGlobalStyle } from "styled-components";

 export const GlobalStyle = createGlobalStyle`
  *{  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    
   
  }

  body {
    background-image: url(/public/images/body-shape.png);
    background-repeat: no-repeat;
    background-position: right top;
  }
  

`;
