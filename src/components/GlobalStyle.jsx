import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
 
  #root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
}
 
* { 
    background-color: #ffc8d8;
    border: black 1px solid;
    border-radius: 10%;
    
  }
`;

export default GlobalStyle;
