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
    background-color: #fdd3e3;
    border: black 1px solid;
  
    
  }
`;

export default GlobalStyle;
