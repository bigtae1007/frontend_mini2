import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin : 0;
    padding: 0;
   font-family: 'Elice Digital Coding', 'monospace'; 
  }
  a {
    text-decoration : none;
  }
  button {
    cursor: pointer;
  }
  body{
    margin-top: 110px;
  }
  :root {
    --black : #333333;
    --white: #ffffff;
    --grey : #dddddd;
    --greyD : #aaaaaa;
    --green : #00B98D;
    --red :#F85151; 
    --blue : #0085FF;
  }
`;

export default GlobalStyle;
