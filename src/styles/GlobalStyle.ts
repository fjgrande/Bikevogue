import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *, ::before, ::after {
    box-sizing: border-box;
  }

  body, h1, h2{
    margin-top: 0;
  }

  html {
    font-family: ${({ theme }) => theme.typography.mainFont};
    background-color: ${({ theme }) => theme.colors.mainBackground};
    color: ${({ theme }) => theme.colors.light};
    margin: 0;
    padding: 20px;
  }

  ul, li {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
  
  dl, dd {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

    img {
      max-width: 100%;
    }

  button {
    font: inherit;
  }

  input, textarea {
      font: inherit;
      border: none
    }
    
`;

export default GlobalStyle;
