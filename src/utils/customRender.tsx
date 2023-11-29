import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import GlobalStyle from "../styles/GlobalStyle";

const customRender = (children: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </BrowserRouter>,
  );
};

export default customRender;
