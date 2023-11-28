import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}

body {
  font-family: ${({ theme }) => theme.typography.mainFont};
  background-color: ${({ theme }) => theme.colors.mainBackground};
  color: ${({ theme }) => theme.colors.light};
  margin: 0;
  padding: 20px;
}

h1, h2{
  margin-top: 0;
}

ul, li {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  font: inherit;
}
`;
export default GlobalStyle;
